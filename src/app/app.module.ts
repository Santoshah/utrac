import { JwtInterceptor } from './dashboard/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './dashboard/interceptor/error.interceptor';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// user defined module
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

// components
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy       : PreloadAllModules
};
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
