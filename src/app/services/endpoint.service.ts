import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  public apiEndpoint: string = 'http://localhost:4040';

  public signUpEndpoint: string = '/authentication/sign/up';
  public signInEndpoint: string = '/authentication/sign/in';

  constructor() { }
}
