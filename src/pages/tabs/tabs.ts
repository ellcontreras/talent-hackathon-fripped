import { Component } from '@angular/core';

import { TestsPage } from '../tests/tests';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

// import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TestsPage;
  tab3Root = ProfilePage;

  constructor() {
  }
}
