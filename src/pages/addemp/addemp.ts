import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpDbProvider } from "../../providers/emp-db/emp-db";
import { employee } from "../home/employee";
/**
 * Generated class for the AddempPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addemp',
  templateUrl: 'addemp.html',
})
export class AddempPage {
  id:number;
  name1:string;
  desig:string;
  sal:number;
  constructor(public edata:EmpDbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddempPage');
    
  }
  addemp()
  {
    this.edata.addemp(new employee(this.id,this.name1,this.desig,this.sal));
    this.navCtrl.pop();
  }


}
