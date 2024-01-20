import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  public api: string = 'http://localhost:4040';

  public ep_signUp: string = `${this.api}/authentication/sign/up`;
  public ep_signIn: string = `${this.api}/authentication/sign/in`;

  constructor() { }
}
