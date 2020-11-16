import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private http: HttpClient

  ) { }

  getOrders(orderType?: string){
    
    let path = "menu/getActiveOrders";
    if(orderType == "new") {
      path = "menu/getNewOrders";
    }
    return this.http.get(path,{headers: this.headers})
    .pipe(map(data => {
      return data;
    }));
  }
}
