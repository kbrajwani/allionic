import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserdbProviderlogin {

  url_login: string = "http://localhost:3000/login/";
  url_signup:string="http://localhost:3000/signup/"
  constructor(public http: Http) {
    console.log('Hello UserdbProvider Provider');
  }

  Login(user) {
    console.log(user.email);  
    console.log(user.password);  
    let body = JSON.stringify(user);
    console.log(body);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_login, body, ro).map((res) => res.json());
  }
  addUser(user){
    console.log(user.userid);  
    console.log(user.password);  
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_signup, body, ro).map((res) => res.json());
  }
}
