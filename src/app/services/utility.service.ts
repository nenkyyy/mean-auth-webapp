import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    public router: Router
  ) { }

  linkMe(url: string) { this.router.navigateByUrl(url); }
}
