import { OrdersService } from './orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders : any = [];
  constructor(
    private _orders : OrdersService
  ) { }

  ngOnInit(): void {
    this.getOrders('new')
  }
  getOrders(orderType) {
    this._orders.getOrders(orderType).subscribe(data=>{
      console.log(data);
      this.orders = data;
    })
  }

}
