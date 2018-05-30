import { Component } from '@angular/core';

import { IonicPage, NavController} from 'ionic-angular';

import { UserdbProviderlogin } from '../../providers/userdb/userdb';
import { User_Class } from "../../providers/userdb/user_class";
import { SignupPage } from "../signup/signup";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email_id:string='';
  password:string='';
  constructor(public navCtrl: NavController,public _db:UserdbProviderlogin){

  }
  signup()
  {
    this.navCtrl.push(SignupPage);
  }
  onLoginClick(){

      this._db.Login(new User_Class(this.email_id,this.password,''))
      .subscribe(
        (x:User_Class[])=>{

            if(x.length==1){
              alert('login');
            }
            else{
              alert('invalid');
            }
        },
        function(error){
          console.log(error);
        },
        function(){}
      );
  }

}
