import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.scss']
})
export class ActiveOrdersComponent implements OnInit {

  activeOrders : any = [];
  constructor(
    private _orders : OrdersService
  ) { }

  ngOnInit(): void {
    this.getOrders('active')
  }
  getOrders(orderType) {
    this._orders.getOrders(orderType).subscribe(data=>{
      console.log(data);
      this.activeOrders = data;
    })
  }
}
