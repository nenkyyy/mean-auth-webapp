import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentRoutingModule } from './dashboard.component.routing.module';
import { AppComponentsModule } from '../app-components/app.components.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardComponentRoutingModule,
    AppComponentsModule
  ]
})
export class DashboardComponentModule { }
