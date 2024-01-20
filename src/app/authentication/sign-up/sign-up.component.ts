import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public formGroup!: FormGroup;
  public submitted: boolean = false;
  public error: any = null;

  constructor(
    public authenticationService: AuthenticationService,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.utilityService.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signUp(formGroup: FormGroup) {
    this.error = null;
    this.submitted = true;

    let payload: any = {
      firstname: formGroup['value']['firstname'],
      lastname: formGroup['value']['lastname'],
      email: formGroup['value']['email'],
      phone: formGroup['value']['phone'],
      password: formGroup['value']['password']
    }

    this.authenticationService.appSignUp(payload).subscribe({
      // error: (error: any) => { console.log(error); },
      next: (reply: any) => {
        if (reply['error'] != undefined) {
          this.error = reply['error'];
          this.submitted = false;
          return;
        }

        this.utilityService.linkMe('/auth/sign-in');
      },
      // complete: () => { }
    });
  }
}
