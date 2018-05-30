import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Demo1Page } from "../pages/demo1/demo1";
import { Demo2Page } from "../pages/demo2/demo2";
import { UserPage } from "../pages/user/user";
import { TodoPage } from "../pages/todo/todo";
import { AddproductsPage } from "../pages/addproducts/addproducts";
import { ProductsPage } from "../pages/products/products";
import { AdduserPage } from "../pages/adduser/adduser";
import { AddempPage } from "../pages/addemp/addemp";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductDbProvider } from '../providers/product-db/product-db';
import { UserDbProvider } from '../providers/user-db/user-db';
import { UserdbProviderlogin } from "../providers/userdb/userdb";
import { EmpDbProvider } from '../providers/emp-db/emp-db';
import { TaskdataProvider } from '../providers/taskdata/taskdata';
import { TaskPage } from "../pages/task/task";
import { AddtaskPage } from "../pages/addtask/addtask";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Demo1Page,
    Demo2Page,
    TodoPage,
    UserPage,
    AddproductsPage,
    ProductsPage,
    AdduserPage,
    AddempPage,
    TaskPage,
    AddtaskPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Demo1Page,
    Demo2Page,
    UserPage,
    TodoPage,
    AddproductsPage,
    ProductsPage,
    AdduserPage,
    AddempPage,
    TaskPage,
    AddtaskPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductDbProvider,
    UserDbProvider,
    EmpDbProvider,
    TaskdataProvider,
    UserdbProviderlogin

  ]
})
export class AppModule {}
