import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponentRoutingModule } from './sign-in.component.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app.material.module';

import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class SignInComponentModule { }
