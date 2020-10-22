import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadService implements PreloadingStrategy {
  constructor(private authService: AuthService) {}


  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // console.log('\n======CustomPreloadService======');
    // console.log('======route======');
    // console.log(route);
    // console.log('======load======');
    // console.log(load);
    return route.data?.preload ? load() : of(null);
    // return this.authService.isLogged ? load() : of(null);
  }
}
