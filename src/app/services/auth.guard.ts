import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router'



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  AuthGuard: any;
  constructor(private router: Router) { }
  canActivate() {

    if (this.isAuthenticated())
      return true;
    return false;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.log("Login First");
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }

}
