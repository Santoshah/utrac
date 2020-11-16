import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './../core/auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router:Router
    ) {}



    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            const tokenAvailable = this.authService.getAceessTocken();
            
            if(tokenAvailable != '' && tokenAvailable != null) {
                //getting empty  data so not redirecting if already login
                const currentRoute = state.url;
                console.log(currentRoute);
                if(currentRoute == "/" || currentRoute == "/login" || currentRoute == "/signup" || currentRoute == "**") {
                   this.router.navigate(['/dashboard/orders'])
                }
                return true;
            }
            this.router.navigate(['/'])
            return false;           
}
}