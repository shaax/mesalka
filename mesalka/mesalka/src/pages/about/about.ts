import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationService } from '../../providers/location-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [LocationService]
})
export class AboutPage {

  public locations: any;
  constructor(public navCtrl: NavController, public dbService: LocationService){
    this.loadPeople();
  }

  loadPeople() {
    this.dbService.load()
      .then(data1 => {
        this.locations = data1;
      });
  }

}
