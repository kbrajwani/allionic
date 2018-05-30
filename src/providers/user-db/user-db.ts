import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { user } from "../../pages/home/user";
/*
  Generated class for the UserDbProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserDbProvider {

  constructor(public http: Http) {
    console.log('Hello UserDbProvider Provider');
  }
  arr:user[]=[
    new user("kumar","kbrajwani18@gmail.com","18-11-1997","male","krushnanagr")
  ];
  adduser(item:user)
  {
    this.arr.push(item);
  }
  deleteuser(item:user)
  {
    this.arr.splice(this.arr.indexOf(item),1);
  }
  getuser()
  {
    return this.arr;
  }
}
