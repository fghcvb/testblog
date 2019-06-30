import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authService.isLoggedIn) {
            console.log('AuthInterceptor');
            const authToken = this.authService.getAuthorizationToken();
            console.log('AuthInterceptor1', authToken);
            req = req.clone({
                setHeaders:
                    { Authorization: authToken }
                }
            );
            console.log('req', req);
        }
        return next.handle(req);
    }
}
