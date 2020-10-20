import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForthPageComponent } from './forth-page.component';

const routes: Routes = [{ path: '', component: ForthPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForthPageRoutingModule { }
