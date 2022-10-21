import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import {CheckLoginService} from "./service/check-login.service"

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private check: CheckLoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.check.isLogin()) {
      return true;
    }
    this.router.navigate(['login'])
    return  false
    
  }
    
}
