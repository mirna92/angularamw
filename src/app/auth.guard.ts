import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router, private toaster: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("user"))
      {
       
        if((JSON.parse(localStorage.getItem("user")||'null')?.admin || '') == '0'){
          this.toaster.warning("ليس لديك صلاحية الأدمن")
          this.router.navigate( [ 'login','verify' ] );
          return false;
        }
        else{
          return true;
        }
        
      }
    else {
      this.router.navigate( [ 'login' ] );
      return false;}
  }
  
}
