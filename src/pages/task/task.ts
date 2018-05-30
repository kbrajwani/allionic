import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { tasks } from "./tasks";
import { TaskdataProvider } from "../../providers/taskdata/taskdata";
import { AddtaskPage } from "../addtask/addtask";

/**
 * Generated class for the TaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
arr:tasks[]=[];
arr1:tasks[]=[];
  constructor(public data:TaskdataProvider,public loadcontrol:LoadingController,public tos:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad TaskPage');
      let load=this.loadcontrol.create({content:"please wait"});
      load.present();
      this.data.getdata().subscribe(
      (d:tasks[])=>{
        this.arr=d;
        this.arr1=d;
      console.log(d);
      },   
      function(error){alert(error);},			
      function(){alert("complete");
    load.dismiss();
    }	
    );
   
  }
  update(item:tasks)
  {
    if(item.Status=="pending")
    {
      item.Status="done";
    }
    else
    {
      item.Status="pending";
    }
    this.data.edittask(item).subscribe(
      (d:tasks[])=>{
        let msg=this.tos.create(
          {
            message:'updated',
            duration:1000,
            position:'bottom'
        }
        );
        msg.present();
        console.log(d);
        },   
        function(error){alert(error);},			
        function(){alert("complete");
      
      }	
    );
  }
  onadd()
  {
   this.navCtrl.push(AddtaskPage,{x:this.arr}); 
  }
  delete(item)
  {
    this.data.deletetask(item).subscribe(
      (d:any)=>{alert("delete");},   
      function(error){alert(error);},			
      function(){alert("complete");
    }	
    );
  }
  txtsearch:string='';
  searchterm(){
    if(this.txtsearch!='')
    {
      this.arr=this.arr.filter((x)=>x.Title.startsWith(this.txtsearch))
    }
    else
    {
    
      this.arr=this.arr1;
    }
  }
}
