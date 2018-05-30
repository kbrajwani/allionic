import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { ProductDbProvider } from "../../providers/product-db/product-db";
import { product } from "../products/product";
/**
 * Generated class for the AddproductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {
  pname:string;
  p_id:number;
  pprice:number;
  pimg:string;
  soh:number;
  constructor(public loadcontrol:LoadingController,public pdata:ProductDbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
  }
  
  addproduct()
  {
    let load=this.loadcontrol.create({content:"please wait"});
    load.present();
    let item=new product(this.p_id,this.pname,this.pprice,this.pimg,this.soh);
   this.pdata.addproduct(item)
   .subscribe(
          (data)=>{alert("success");},   
          function(error){alert(error);},			
          function(){
          alert("complete");
          load.dismiss();
        }			
        );
   //this.navCtrl.pop();
  }
} 
