import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { product } from "../../pages/products/product";

/*
  Generated class for the ProductDbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductDbProvider {

  constructor(public http: Http) {
    console.log('Hello ProductDbProvider Provider');
  }
  url: string = "https://rkdemotask.herokuapp.com/products/";
  arr: product[] = [];
  addproduct(item) {
    let body = JSON.stringify(item);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: header });
    return this.http.post(this.url, body, ro).map((res: Response) => res.json());
  }
  deleteproduct(item: product) {
    this.arr.splice(this.arr.indexOf(item), 1);
  } 
  getproduct() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }
} 
