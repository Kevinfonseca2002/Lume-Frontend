import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly KEY = "auth_token_demo";

  loginMock(email: string, password: string): boolean {
    const sucess= !!email && !!password; //if there is email and password(!!thereis)

    if(sucess){
      localStorage.setItem(this.KEY, "token")//set item recibe dos parametros, llave y valor, la llave esta arriba declarada y el valor entre "" va a ser el token que se va a generar
    }

    return sucess;
  }

  logout():void{
    localStorage.removeItem(this.KEY)
    //No necesita un tipo de dato porque no va hacer un return, simplemente borra el token del local storage
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.KEY)
    //Esta logeado? va y mira en el local storage si esta el token, si si, esta logeado, si no, not logged in y depende de la expiracion del token
  }

}
