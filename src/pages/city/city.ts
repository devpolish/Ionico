import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})

export class City {

  cities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let cityId = this.navParams.get('cityId');
    this.http.get(`http://localhost:3000/api/cities/${cityId}`).map(res => res.json()).subscribe(data => {
      this.cities = data;
      
      this.cities.forEach( (element) => {
        var base_path = element.picture_uid.url;
        element.picture_uid.url = "http://localhost:3000" + base_path;
      });

    });
    
  }

}
