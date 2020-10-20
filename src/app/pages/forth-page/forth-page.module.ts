import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForthPageRoutingModule } from './forth-page-routing.module';
import { ForthPageComponent } from './forth-page.component';


@NgModule({
  declarations: [ForthPageComponent],
  imports: [
    CommonModule,
    ForthPageRoutingModule,
  ]
})
export class ForthPageModule { }
