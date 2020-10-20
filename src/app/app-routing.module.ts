import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {FirstPageComponent} from './pages/first-page/first-page.component';
import {CustomPreloadService} from './custom-preload.service';
import {CustomGuard} from './custom.guard';
import {SecondPageComponent} from './pages/second-page/second-page.component';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstPageComponent
  },
  {
    path: 'second',
    loadChildren: () => import('./pages/second-page/second-page.module').then(module => module.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./pages/third-page/third-page.module').then(module => module.ThirdPageModule),
    data: { preload: true },
  },
  {
    path: 'forth',
    loadChildren: () => import('./pages/forth-page/forth-page.module').then(module => module.ForthPageModule),
    // data: { preload: true },
    // data: { preload: false },
    // canActivate: [CustomGuard],
    // canLoad: [CustomGuard],
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: QuicklinkStrategy }
    )
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {}
