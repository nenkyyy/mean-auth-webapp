import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponentRoutingModule } from './sign-up.component.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app.material.module';

import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class SignUpComponentModule { }
