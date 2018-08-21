import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Cities } from '../cities/cities';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Cities;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
