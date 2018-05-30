import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { TaskdataProvider } from "../../providers/taskdata/taskdata";
import { tasks } from "../../pages/task/tasks";
/**
 * Generated class for the AddtaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {
  arr:tasks[]=[];
Id:string="";
Title:string="";
Status:string="";
  constructor(public task:TaskdataProvider,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }
  onadd()
  {
    this.arr=this.navParams.get('x');
    console.log(this.Title);
    this.task.addtask(new tasks(this.Id,this.Title,this.Status)).subscribe(
      (data:any)=>{
       this.arr.push(new tasks(this.Id,this.Title,this.Status));
      //this.navCtrl.pop();
    },   
      function(error){alert(error);},			
      function(){
      alert("complete");
    }			
    );
   
  }

}
