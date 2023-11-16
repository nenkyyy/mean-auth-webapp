import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
      { path: '', component: AuthenticationComponent, canActivate: [] },
      {
        path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.component.module')
          .then(m => m.SignUpComponentModule)
      },
      {
        path: 'sign-in', loadChildren: () => import('./sign-in/sign-in.component.module')
          .then(m => m.SignInComponentModule)
      },
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AuthenticationComponentRoutingModule { }
