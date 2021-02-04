import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {

  constructor(private authService : AuthService,private router : Router){

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const url : string = state.url
      let token = localStorage.getItem('token_id')
      console.log('auth guard executing');
      return this.authService.checkValidToken(token)
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state)
  }

 /*  checkLogin(url : string){
    if (localStorage.getItem('token_id')){
      return true
    }

    else {
      alert('woi you arent logged in cant view')
      this.router.navigateByUrl('login')
    }

  } */
  
}
