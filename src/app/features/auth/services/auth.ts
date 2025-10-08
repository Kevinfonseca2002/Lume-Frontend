import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginMock(a:string,b:string){
    return a+b
  }

}
