import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tasks } from "../../pages/task/tasks";
/*
  Generated class for the TaskdataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TaskdataProvider {
  arr:tasks[]=[];
  url:string="http://localhost:3000/task/";
  constructor(public http: Http) {
    console.log('Hello TaskdataProvider Provider');
  }
  getdata()
  {
    return this.http.get(this.url).map((res: Response) => res.json());
  }
  addtask(item) {
    let body = JSON.stringify(item);
    let header = new Headers({'Content-Type':'application/json'});
    let ro = new RequestOptions({ headers: header });
    return this.http.post(this.url,body,ro).map((res: Response) => res.json());
  }
  edittask(item) {
    let body = JSON.stringify(item);
    let header = new Headers({'Content-Type':'application/json'});
    let ro = new RequestOptions({ headers: header });
    return this.http.put(this.url+item.Id,body,ro).map((res: Response) => res.json());
  }
  deletetask(item)
  {
    let header = new Headers({'Content-Type':'application/json'});
    let ro = new RequestOptions({ headers: header });
    return this.http.delete(this.url+item.Id,ro).map((res: Response) => res.json());
  }
}
