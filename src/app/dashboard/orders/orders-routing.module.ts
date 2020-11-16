import { ActiveOrdersComponent } from './active-orders/active-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_guards/auth-guard.service';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent,
    canActivate: [AuthGuard],

  },
  {
    path: "active",
    component: ActiveOrdersComponent,
    canActivate: [AuthGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
