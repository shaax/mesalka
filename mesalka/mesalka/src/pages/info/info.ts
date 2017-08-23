import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  public user:any;
  public mail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user=this.navParams.get('thing1');
    this.mail=this.navParams.get('thing2');
    //console.log(this.user);
  }

}
