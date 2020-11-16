import { PastOrdersComponent } from './past-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastOrdersRoutingModule } from './past-orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PastOrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    PastOrdersRoutingModule
  ]
})
export class PastOrdersModule { }
