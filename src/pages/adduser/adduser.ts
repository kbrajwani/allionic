import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDbProvider } from "../../providers/user-db/user-db";
import { user } from "../home/user";

/**
 * Generated class for the AdduserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  
  email:string='';
  name:string='';
  bday:string="";
  gender:string="";
  address:string="";
  constructor(public udata:UserDbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }
  add()
  {
   this.udata.adduser(new user(this.name,this.email,this.bday,this.gender,this.address));
   this.navCtrl.pop();
  }
}
