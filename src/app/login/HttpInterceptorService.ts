import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  PWD_SESSION_ATTRIBUTE_NAME = 'authenticatedPWD';
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa( sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME) + ':' +
                                                         sessionStorage.getItem(this.PWD_SESSION_ATTRIBUTE_NAME))}`
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req).pipe( tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            this.router.navigate(['login']);
          }
        }));
    }
  }
}
