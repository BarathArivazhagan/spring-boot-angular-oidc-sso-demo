import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SSOService } from '../oauth2/sso/sso.service';


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private ssoService: SSOService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const accessToken = this.ssoService.getAccessToken();
        const isLoggedIn = this.ssoService.isLoggedIn();
        if (isLoggedIn && accessToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }

        return next.handle(request);
    }
}