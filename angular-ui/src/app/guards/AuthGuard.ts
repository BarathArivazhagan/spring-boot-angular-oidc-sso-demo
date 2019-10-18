import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SSOService } from '../oauth2/sso/sso.service';
import { tryParse } from 'selenium-webdriver/http';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
   

    constructor(
        private router: Router,
        private ssoService: SSOService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('auth guard activated ');
        const isLoggedIn = this.ssoService.isLoggedIn();
        if (isLoggedIn && this.hasRoleForRoute(state)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/unauthorized'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    protected hasRoleForRoute(state: RouterStateSnapshot): boolean {
        
        if(this.ssoService.isAdmin()) return true;
        const userRoles = this.ssoService.getUserRoles();
        const urlRole = this.getRoleFromUrl(state.url);
        return userRoles.includes(urlRole) ;

    }

    public getRoleFromUrl(url: string): string {
        //if url is empty return
        if( !url) return; 
        const matrix = [{
            "/users" : "view-role"
        }];

        for( let i=0; i< matrix.length; i++) {
            if(matrix[i].hasOwnProperty(url)){
                return matrix[i][url];
            }
        }
        
    }
}
