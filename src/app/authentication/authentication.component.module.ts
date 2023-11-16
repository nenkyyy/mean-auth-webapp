import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponentRoutingModule } from './authentication.component.routing.module';
import { AppMaterialModule } from '../app.material.module';

import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationComponentRoutingModule,
    AppMaterialModule
  ]
})
export class AuthenticationComponentModule { }
