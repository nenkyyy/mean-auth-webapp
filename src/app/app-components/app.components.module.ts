import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';

import { PageletComponent } from './app-pagelet/pagelet.component';
import { FooterComponent } from './app-footer/footer.component';


@NgModule({
  declarations: [
    PageletComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    PageletComponent,
    FooterComponent
  ]
})
export class AppComponentsModule { }
