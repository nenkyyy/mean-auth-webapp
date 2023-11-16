import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public accessToken: string = 'accessToken';

  constructor(
    public httpClient: HttpClient,
    public endpointService: EndpointService
  ) { }

  get isAuthenticated() { return !!localStorage.getItem(this.accessToken); }

  appSignUp(payload: any) {
    return this.httpClient.post(
      this.endpointService['apiEndpoint'] + this.endpointService['signUpEndpoint'], payload
    );
  }

  appSignIn(payload: any) {
    return this.httpClient.post(
      this.endpointService['apiEndpoint'] + this.endpointService['signInEndpoint'], payload
    );
  }
}
