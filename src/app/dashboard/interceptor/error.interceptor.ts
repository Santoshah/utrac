import { AuthService } from './../../core/auth.service';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { HttpError } from './http-error';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private _toaster: ToastrService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(catchError(err => {

            switch(err.status) {
                case HttpError.Unauthorized:
                    this._toaster.error('Bad request '+ HttpError.Unauthorized, "Error!", {
                        timeOut: 3000
                    });
                    this.authService.logout();
                    localStorage.removeItem('access_token');
                    location.reload(true);
                    break;

                case HttpError.BadRequest:
                    this._toaster.error('Bad request '+ HttpError.BadRequest, "Error!", {
                            timeOut: 3000
                    });
                    break;
                case HttpError.NotFound:
                    this._toaster.error('Not Found '+ HttpError.NotFound, "Error!", {
                            timeOut: 3000
                    });
                    break;
                case HttpError.TimeOut:
                    this._toaster.error('Time out '+ HttpError.TimeOut, "Error!", {
                        timeOut: 3000
                    });
                    break;
                case HttpError.Forbidden:
                    this._toaster.error('Forbidden Access '+ HttpError.Forbidden, "Error!", {
                        timeOut: 3000
                    });
                    break;
                case HttpError.InternalServerError:
                    this._toaster.error('Internal Server Error '+ HttpError.InternalServerError, "Error!", {
                        timeOut: 3000
                    });
                    break;

            }
            


            return throwError(err);
        }));
    }
}
