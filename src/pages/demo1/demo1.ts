import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {product} from '../products/product';
@Component({
  selector: 'page-demo1',
  templateUrl: 'demo1.html',
})
export class Demo1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
arr:product;
id:number;
name:string;
price:number;
img:string;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo1Page');
    this.arr=this.navParams.get('x');
    this.id=this.arr.p_id;
    this.name=this.arr.pname;
    this.price=this.arr.pprice;
    this.img=this.arr.pimg;
  }

}
