import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from './user';
import { employee } from './employee';
import { Demo2Page } from '../demo2/demo2';
import { UserPage } from "../user/user";
import { TodoPage } from "../todo/todo";
import { tasks } from "../contact/task";
import { AddempPage } from "../addemp/addemp";

import { UserDbProvider } from "../../providers/user-db/user-db";
import {AdduserPage} from '../adduser/adduser'
import {EmpDbProvider} from '../../providers/emp-db/emp-db';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  id:number;
  desig:string='';
  sal:number;
  x:string='';
  y:string='';
  
  name1:string='';
 
 z:String='';
 arr:user[]=[];
 arr1:employee[]=[];
  
  todoid:number;
  todotitle:string='';
 arr2:tasks[]=[
 new tasks(1,"to do first","start"),
 new tasks(2,"hack something","future")
 ];
  constructor(public edata:EmpDbProvider,public udata:UserDbProvider,public navCtrl: NavController) {

  }
 
  addtodo()
  {

    this.arr2.push(new tasks(this.todoid,this.todotitle,'pending'));
  }


  visibleuser()
  {
    this.arr=this.udata.getuser();
    this.x="a";
    this.y='';
    this.z='';
  }
  visibletodo()
  {
    
    this.y="";
    this.x='';
    this.z='a';
  }
  visibleemp()
  {
    this.arr1=this.edata.getemp();
    this.y="a";
    this.x='';
    this.z='';
  }
  add()
  {
    this.navCtrl.push(AdduserPage);
  }
  
delete(x)
{
  this.udata.deleteuser(x);
}
addemp()
{
  this.navCtrl.push(AddempPage);
}
deleteemp(x)
{
this.edata.delemp(x);
}
deletetodo(x)
{
this.arr2.splice(this.arr2.indexOf(x),1);
}
showuser(item1)
{
  this.navCtrl.push(UserPage,{x:item1});
}
showemp(item1)
{
 this.navCtrl.push(Demo2Page,{x:item1});
}
showtodo(item1)
{
 this.navCtrl.push(TodoPage,{x:item1});
}
}
