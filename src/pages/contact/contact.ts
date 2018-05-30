import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {tasks } from './task';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
}) 
export class ContactPage {
  id:number=0;
  title:string='';
 x:string="";
 arr:tasks[]=[
 new tasks(1,"to do first","start"),
 new tasks(2,"hack something","future")
 ];
  constructor(public navCtrl: NavController) {

  }
  add()
  {

    this.arr.push(new tasks(this.id,this.title,'pending'));
  }
delete(x)
{
this.arr.splice(this.arr.indexOf(x),1);
}
}
