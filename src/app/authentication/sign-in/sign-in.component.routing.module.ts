import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in.component';
import { CanActivateLoggedInGuard } from 'src/app/guards/logged.in.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: SignInComponent, canActivate: [CanActivateLoggedInGuard] }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SignInComponentRoutingModule { }
