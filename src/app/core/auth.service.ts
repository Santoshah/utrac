import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headerData = new HttpHeaders({
    'Content-Type': 'application/json'
});

constructor(
    private http: HttpClient
) { 

}


  login(loginData) {      
    // environment.menu+ 
    return this.http.post("menu/login", { ...loginData }, { headers: this.headerData })
        .pipe(map(data => {
            return data;
        }));
}

logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('usertype');
    location.reload();
}

getAceessTocken() {
    return localStorage.getItem('access_token');
}

}
