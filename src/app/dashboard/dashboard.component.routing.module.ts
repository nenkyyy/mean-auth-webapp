import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CanActivateAuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: DashboardComponent, canActivate: [CanActivateAuthGuard] }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardComponentRoutingModule { }
