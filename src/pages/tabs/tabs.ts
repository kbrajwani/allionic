import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Demo1Page } from "../demo1/demo1";
import { ProductsPage } from "../products/products";
import { TaskPage } from "../task/task";
import { LoginPage } from "../login/login";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProductsPage;
  tab5Root = TaskPage;
  tab6Root = LoginPage;
  constructor() {

  }
}
