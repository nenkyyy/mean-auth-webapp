import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestClone = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${this.authenticationService.getAccessToken}`
      })
    });
    return next.handle(requestClone);
  }
}