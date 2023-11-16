import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up.component';
import { CanActivateLoggedInGuard } from 'src/app/guards/logged.in.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: SignUpComponent, canActivate: [CanActivateLoggedInGuard] }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SignUpComponentRoutingModule { }
