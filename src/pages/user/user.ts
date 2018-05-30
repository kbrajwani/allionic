import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { user } from "../home/user";
/**
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  name:string;
  email:string;
  bday:string;
  address:string;
  gender:string;
  y:user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.y=this.navParams.get('x');
    this.name=this.y.name;
    this.email=this.y.email;
    this.bday=this.y.bday;
    this.gender=this.y.gender;
    if(this.gender=="rb-0-1")
    {
      this.gender="female";
    }
    else
    {
      this.gender="male";
    }
    this.address=this.y.address;
    
  }

}
