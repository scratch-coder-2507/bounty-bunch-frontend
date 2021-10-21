import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let accessToken: any = localStorage.getItem('token');
        accessToken = JSON.parse(accessToken);
        console.log("access:", accessToken);
        if (accessToken) {
            req = req.clone({
                headers: req.headers.set('Authorization', accessToken.token_type + ' ' + accessToken.access_token)
            });
        }

        return next.handle(req);

    }

}