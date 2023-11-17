import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public formGroup!: FormGroup;
  public submitted: boolean = false;
  public error: any = null;

  constructor(
    public formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  signIn(formGroup: FormGroup) {
    this.submitted = true;

    let payload: any = {
      email: formGroup['value']['email'],
      password: formGroup['value']['password']
    }

    this.authenticationService.appSignIn(payload).subscribe({
      // error: (error: any) => { console.log(error); },
      next: (reply: any) => {
        if (reply['error'] != undefined) {
          this.error = reply['error'];
          this.submitted = false;
          return;
        }

        localStorage.setItem('accessToken', reply['token']);
        this.utilityService.linkMe('/');
      },
      // complete: () => { }
    });
  }
}
