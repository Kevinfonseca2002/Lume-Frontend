import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../features/auth/services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isLoggedIn() && auth.isStore())return true

  router.navigate(["/login"])
  return false


  //Si esta logueado y es admi
  return true;
};
