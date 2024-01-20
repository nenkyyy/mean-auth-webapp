import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
  ) { }

  linkMe(url: string) { this.router.navigateByUrl(url); }
}
