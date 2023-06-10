import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap, take } from 'rxjs/operators'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authSrv: AuthService) {}

    newReq! : HttpRequest<any>;

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return this.authSrv.user$.pipe(take(1), switchMap(user => {
            if (!user) {
                console.log(request);
                console.log(this.newReq);
                return next.handle(request);
            }

            this.newReq = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${user.accessToken}`)
            });

            console.log(request);
            console.log(this.newReq);
            return next.handle(this.newReq);
        }));
    }
}
