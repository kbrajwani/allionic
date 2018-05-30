import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {employee} from '../home/employee';


/**
 * Generated class for the Demo2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo2',
  templateUrl: 'demo2.html',
})
export class Demo2Page {
 
  name:String='';
  desig:string='';
  sal:number;
  id:number;
  x:employee;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo2Page');
    this.x=this.navParams.get('x');
    this.id=this.x.empid;
    this.name=this.x.empname;
    this.sal=this.x.empsal;
    this.desig=this.x.empdesig;
   
    
    
    
  }

}
