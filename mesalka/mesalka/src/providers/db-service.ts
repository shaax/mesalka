import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the PeopleSearch provider.
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DBService {
  data1: any;
  inst:any;
  constructor(public http: Http) {
    console.log('Hello PeopleSearch Provider');
  }

  load(inst) {

    /*if (this.data1) {
      return Promise.resolve(this.data1);
    }*/
    // Dont have the data yet
    return new Promise(resolve => {
      console.log(inst);
      this.http.get('https://secret-island-60681.herokuapp.com/users/get_users_by_instrument/'+inst+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }

  loadSk(inst) {

    /*if (this.data1) {
     return Promise.resolve(this.data1);
     }*/
    // Dont have the data yet
    return new Promise(resolve => {
      console.log(inst);
      this.http.get('https://secret-island-60681.herokuapp.com/bands/get_bands_by_instrument/'+inst+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }

  login(inst) {
    /*if (this.data1) {
     return Promise.resolve(this.data1);
     }*/
    // Dont have the data yet
    return new Promise(resolve => {
      console.log(inst);
      this.http.get('https://secret-island-60681.herokuapp.com/users/login/'+inst+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data;
          resolve(this.data1);
        });
    });
  }

  dodajG(inst) {
    /*if (this.data1) {
     return Promise.resolve(this.data1);
     }*/
    // Dont have the data yet
    /*return new Promise(resolve => {
      console.log(inst);
      this.http.get('https://secret-island-60681.herokuapp.com/users/login/'+inst+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data;
          resolve(this.data1);
        });
    });*/
  }

  dodajS(inst) {
    /*if (this.data1) {
     return Promise.resolve(this.data1);
     }*/
    // Dont have the data yet
    /*return new Promise(resolve => {
      console.log(inst);
      this.http.get('https://secret-island-60681.herokuapp.com/users/login/'+inst+'.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data;
          resolve(this.data1);
        });
    });*/
  }
}
