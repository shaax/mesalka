import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import { DBService } from '../../providers/db-service';
import {LokacijaPage} from "./lokacija";
import {SkupinaPage} from "./skupina";
import {GlasbenikPage} from "./glasbenik";

@Component({
  selector: 'page-dodaj',
  templateUrl: 'dodaj.html',
  providers: [DBService]
})
export class DodajPage {
  public sts:any;
  username:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService:DBService) {
    //this.user=this.navParams.get('thing1');
    //this.mail=this.navParams.get('thing2');
    //console.log(this.user);
  }
  odpriGlasb(){
    this.navCtrl.push(GlasbenikPage);
  }
  odpriSkup(){
    this.navCtrl.push(SkupinaPage);
  }

  odpriLokac(){
    this.navCtrl.push(LokacijaPage);
  }
/*
  dodajGlasbenika() {
    console.log('crap');
    this.dbService.dodajG(this.username)
      .then(data1 => {
        this.sts = data1;
        if(this.sts.status=="success"){
          this.navCtrl.push(TabsPage,{
            thing1: this.username});
        }
      });
  }

  dodajSkupino() {
    console.log('crap');
    this.dbService.dodajS(this.username)
      .then(data1 => {
        this.sts = data1;
        if(this.sts.status=="success"){
          this.navCtrl.push(TabsPage,{
            thing1: this.username});
        }
      });
  }*/


}
