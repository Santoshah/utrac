import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './_guards/auth-guard.service';


const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
  },
  {
    path : 'signup',
    component : SignupComponent,
  },
  {
    path: 'dashboard',
    component : DashboardLayoutComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m =>m.DashboardModule),
    canActivate: [AuthGuard],
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
