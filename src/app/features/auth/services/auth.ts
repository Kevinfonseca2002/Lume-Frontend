import { Injectable, signal, computed } from '@angular/core';

type Role = 'store' | 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly KEY_TOKEN = 'auth_token_demo'; //Token
  private readonly KEY_ROLE = 'auth_role_demo'; //Role del token

  private _user = signal<{ name: String; email: String } | null>(null); // captura el user
  private _role = signal<Role | null>(null); //captura rol
  private _exp = signal<number|null>(null);

  reloads = signal(0); // recargas de la pagina
  loading = signal(false); //cargando

  user = computed(() => this._user()); //captura solo el user
  role = computed(() => this._role()); //captura solo el rol
  exp = computed(()=> this._exp());//captura solo la expiracion

  //Verifica si hay informacion de logueo en el navegador y de ser asi le da los valores especificos al rol y user

  private makeFakeJWT(payload: object):string{
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT"}));
    const body = btoa(JSON.stringify(payload));
    const sign = btoa("Lumesign")//signature token
    return `${header}.${body}.${sign}`;
  }

  private readPayload(token: string):any|null{
    try{
      const parts = token.split(".");
      if(parts.length !== 3) return null;
      const text = atob(parts[1]);
      return JSON.parse(text);
    }
    catch{
      return null
    }
  }

  constructor() {
    const token = localStorage.getItem(this.KEY_TOKEN);
    const role = localStorage.getItem(this.KEY_ROLE) as Role | null;

    if (token) {
      this._user.set({ name: 'Usuario', email: 'user@finbit.dev' });
      if (role === 'store' || role === 'user') this._role.set(role);
    }
  }

  //////LOGIN/////////////////////

  login(email: string, password: string): boolean {
      if (!email || !password) return false
      const asStore = /store/i.test(email); //Valida que si la palabra "store" este dentro de email //la i significa que ignora mayusculas y minusculas, retorna booleano
      const role:Role =asStore ? "store":"user"; //Trae const y si es store lo pone, else ":" va a ser user.

      const exp= Math.floor(Date.now()/1000)+60*30;//Normaliza el tiempo de expiracion

      const token = this.makeFakeJWT({ name: email.split("@")[0], email, role, exp}); //Guarda el payload


      localStorage.setItem(this.KEY_TOKEN, "token");
      localStorage.setItem(this.KEY_ROLE,role);


      this._user.set({name: asStore ?"Store":"User",email});
      this._role.set(role);
      this._exp.set(exp);
      return true
      };

///////////////////REGISTER/////////////////////

register(data: { name: string; address:string; email: string; password: string; type: Role }): boolean {
    if (!data.name || !data.email || !data.password) return false;
    const exp = Math.floor(Date.now() / 1000) + 60 * 30;
    const token = this.makeFakeJWT({ name: data.name, email: data.email, role: data.type, exp });
    localStorage.setItem(this.KEY_TOKEN, token);
    localStorage.setItem(this.KEY_ROLE, data.type);
    this._user.set({ name: data.name, email: data.email });
    this._role.set(data.type);
    this._exp.set(exp);
    return true;
  }

  getToken():string | null {
    return localStorage.getItem(this.KEY_TOKEN)
  }

  getDecoded():any|null{
    const t = this.getToken();
    return t ? this.readPayload(t):null

  }

  isLoggedIn(): boolean {
    const d = this.getDecoded();
    if(!d) return false;

    if(typeof d.exp === "number" && d.exp *1000<Date.now()){
      this.logout();
      return false;
    }
    return true
  }

  isStore(): boolean {
    return this._role() === 'store';
  }

  logout(): void {
    localStorage.removeItem(this.KEY_ROLE);
    localStorage.removeItem(this.KEY_TOKEN);
    this._user.set(null);
    this._role.set(null);
    this._exp.set(null)
    //No necesita un tipo de dato porque no va hacer un return, simplemente borra el token del local storage
  }

  ///////////SIGNUP/////////////////////////

}
