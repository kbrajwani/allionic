import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  num1:string;
  num2:string;
  ans:number;

  num:string="";
  no1:number=0;
  no2:number=0;
  flag:number=0;
  
  constructor(public navCtrl: NavController) {

  }
  onClick()
  {
 this.ans=parseInt(this.num1)+parseInt(this.num2);
  }
  onback()
  {
 
  this.num=this.num.substring(0,this.num.length-1);
}
onc()
{
this.num="";
}
on0()
{
this.num+=0;
}
on1()
{
this.num+=1;
}
on2()
{
this.num+=2;
}
on3()
{
this.num+=3;
}
on4()
{
this.num+=4;
}
on5()
{
this.num+=5;
}
on6()
{
this.num+=6;
}
on7()
{
this.num+=7;
}
on8()
{
this.num+=8;
}
on9()
{
this.num+=9;
}
ondot()
{
this.num+=".";
}
onplus()
{
  this.no1=+this.num;
this.num="";
this.flag=1;
}
onper()
{
  this.no2=+this.num;
this.num="";
this.num=((this.no1*this.no2)/100)+"";
}
ondiv()
{
  this.no1=+this.num;
this.num="";
this.flag=2;
}
onminus()
{
  this.no1=+this.num;
this.num="";
this.flag=3;
}
onmul()
{
  this.no1=+this.num;
this.num="";
this.flag=4;
}
onequal()
{
  this.no2=+this.num;
this.num="";

if(this.flag==1)
{
  this.num=(this.no1+this.no2)+"";
}
else if(this.flag==2)
{
  this.num=(this.no1/this.no2)+"";
}
else if(this.flag==3)
{
  this.num=(this.no1-this.no2)+"";
}
else
{
  this.num=(this.no1*this.no2)+"";
}
}
}
