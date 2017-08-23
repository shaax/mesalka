import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBService } from '../../providers/db-service';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DBService]
})
export class HomePage {
  public people: any;
  public CValue:String;
  public inst:any;


  constructor(public navCtrl: NavController, public dbService: DBService){
    //this.loadPeople('kitara');
  }

  loadPeople(inst) {
    this.dbService.load(inst)
      .then(data1 => {
        this.people = data1;
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
    this.dbService.load(CValue)
      .then(data1 => {
        this.people = data1;
      });
    //this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
