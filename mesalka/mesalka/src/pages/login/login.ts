import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { DBService } from '../../providers/db-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [DBService]
})
export class LoginPage {
  public sts:any;
  username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService:DBService) {
    //this.user=this.navParams.get('thing1');
    //this.mail=this.navParams.get('thing2');
    //console.log(this.user);
  }
  login() {
    console.log('crap');
    this.dbService.login(this.username)
      .then(data1 => {
        this.sts = data1;
        if(this.sts.status=="success"){
          this.navCtrl.push(TabsPage,{
            thing1: this.username});
        }
        console.log('usr: '+this.sts.id)
      });

    /*this.navCtrl.push(TabsPage,{
      thing1: this.username});*/
  }



}
