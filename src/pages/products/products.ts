import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { product } from "./product";
import { Observable } from "rxjs/Observable";
import { ProductDbProvider } from "../../providers/product-db/product-db";
import {AddproductsPage} from '../addproducts/addproducts'
import {Demo1Page} from '../demo1/demo1';
/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public loadcontrol:LoadingController,public pdata:ProductDbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  arr:product[]=[];
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ProductsPage');
    
    let load=this.loadcontrol.create({content:"please wait"});
    load.present();
    this.pdata.getproduct().subscribe(

      (data:product[])=>{this.arr=data;},   
      function(error){alert(error);},			
      function(){alert("complete");
    load.dismiss();
    }			
    );


  }
  
  delete(item:product)
  {
    this.pdata.deleteproduct(item);
  }
  view(item:product)
  {
    this.navCtrl.push(Demo1Page,{x:item});
  }
  addproduct()
  {
  this.navCtrl.push(AddproductsPage);
  }

}
