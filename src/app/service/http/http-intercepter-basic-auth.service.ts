import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from 'src/app/services/basic-authentication.service';

@Injectable({
  providedIn: "root"
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAutenticationService: BasicAuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    //  let username = 'user'
    //  let password = 'password'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
     let basicAuthHeaderString = this.basicAutenticationService.getAuthenticatedToken();
    let username = this.basicAutenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
