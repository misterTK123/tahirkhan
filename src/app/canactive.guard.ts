import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const canactiveGuard: CanActivateFn = (route, state) => {
  debugger;
    const router = inject(Router);
    debugger;
    const loggedinuser:any = localStorage.getItem('signobj');
    console.log(loggedinuser);
    if (loggedinuser != "") {
      return true; 
    }
   else  {
    router.navigateByUrl('loginuser');
    return false;
   }
  
};
