import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBService } from '../../providers/db-service';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-skupine',
  templateUrl: 'skupine.html',
  providers: [DBService]
})
export class SkupinePage {
  public skupine: any;
  public CValue:String;
  public inst:any;


  constructor(public navCtrl: NavController, public dbService: DBService){

  }

  loadPeople(inst) {
    this.dbService.load(inst)
      .then(data1 => {
        this.skupine = data1;
      });
  }
  onClick(usr,mail) {
    console.log('crap');
    this.navCtrl.push(InfoPage,{
      thing1: usr,
      thing2: mail});
  }

  onChange(CValue) {
    console.log(CValue);
    this.dbService.loadSk(CValue)
      .then(data1 => {
        this.skupine = data1;
      });
  }
}
