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

  get getAccessToken() { return localStorage.getItem(this.accessToken); }
  get isAuthenticated() { return !!localStorage.getItem(this.accessToken); }

  appSignUp(payload: any) {
    return this.httpClient.post(
      this.endpointService['ep_signUp'], payload
    );
  }

  appSignIn(payload: any) {
    return this.httpClient.post(
      this.endpointService['ep_signIn'], payload
    );
  }
}
