import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../features/auth/services/auth';
import { inject } from '@angular/core';

export const guestOnlyGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isLoggedIn()){
    router.navigate(["/main"])
    return false // este falso desactiva las rutas si esta condicion se cumple
  }


  //Si esta logueado, va a bloquear la ruta a la que se le coloque en el routing

  return true;
};
