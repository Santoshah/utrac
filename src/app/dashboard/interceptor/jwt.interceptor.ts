import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../../core/auth.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(
        private authService: AuthService
    ) {

    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
        let accessToken = this.authService.getAceessTocken();
        console.log({accessToken})
        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    token: accessToken,
                }
            })
        }
        return next.handle(request);
    }
}
