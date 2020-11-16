import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component : DashboardComponent,
    
  },{
    path: 'orders',
    loadChildren: () => import('../dashboard/orders/orders.module').then(m =>m.OrdersModule) 
  },{
    path: 'past-orders',
    loadChildren: () => import('../dashboard/past-orders/past-orders.module').then(m =>m.PastOrdersModule) 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
