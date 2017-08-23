import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SkupinePage } from '../skupine/skupine';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';
import {DodajPage} from "../dodaj/dodaj";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public username:any;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SkupinePage;
  tab4Root = DodajPage;

  constructor(public navParams: NavParams ) {
    this.username=this.navParams.get('thing1');
    console.log('navParams: '+this.username);
  }
}
