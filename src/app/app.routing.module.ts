import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboard/dashboard.component.module')
      .then(m => m.DashboardComponentModule)
  },
  {
    path: 'auth', loadChildren: () => import('./authentication/authentication.component.module')
      .then(m => m.AuthenticationComponentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
