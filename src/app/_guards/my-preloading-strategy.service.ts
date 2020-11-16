import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyPreloadingStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log('route.data', route.data);
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }

}