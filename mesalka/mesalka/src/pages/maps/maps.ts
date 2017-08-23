import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DBService } from '../../providers/db-service';
import { InfoPage } from '../info/info';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  providers: [DBService]
})

export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  public maps: any;
  public CValue:String;
  public inst:any;


  constructor(public navCtrl: NavController, public dbService: DBService, public geolocation: Geolocation){

  }

  ionViewWillLoad(){
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      console.log(position.coords.latitude+" "+position.coords.longitude)
      let mapOptions = {
        center: latlng,
        zoom: 15,
        mapTypeId: google.maps.ROADMAP
      }

      this.maps = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker(46.5635805, 15.625895)
      this.addMarker(46.2486394, 15.7157228)

    }, (err) => {
       console.log(err);
    });
  }

  addMarker(lat,lng){
    let marker = new google.maps.Marker({
      map: this.maps,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(lat,lng)
    })

    let content = "<h3>My New Location!</h3><h5>by Anish youtube - Please subscribe</h5>";
    this.addInfoWindow(marker, content)
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.maps, marker);
    });
  }

}
