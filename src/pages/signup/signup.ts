import { Component } from '@angular/core';

import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { UserdbProviderlogin } from '../../providers/userdb/userdb';
import { User_Class } from "../../providers/userdb/user_class";
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };
email:string='';
password:string='';
mobile:string='';
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,public db:UserdbProviderlogin) {

   
    }
    adduser()
    {
      
      this.db.addUser(new User_Class(this.email,this.password,this.mobile)).subscribe(
        (data)=>{alert("success");},   
        function(error){alert(error);},			
        function(){
        alert("complete");
        
      }			
      );
      this.navCtrl.pop(); 
    }
  }

  