import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Demo2Page } from "../../pages/demo2/demo2";
import { employee } from "../../pages/home/employee";
/*
  Generated class for the EmpDbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EmpDbProvider {

arr:employee[]=[
  new employee(1,'kumar','manager',1000)
];
  constructor(public http: Http) {
    console.log('Hello EmpDbProvider Provider');
  }
getemp()
{
  return this.arr;
}
delemp(item:employee)
{
  this.arr.splice(this.arr.indexOf(item),1);
}
addemp(item:employee)
{
  this.arr.push(item);
}
}
