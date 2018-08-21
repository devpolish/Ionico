import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { City } from '../city/city';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html'
})
export class Cities {

  cities: any;

  constructor(public navCtrl: NavController, public AlertCrtl: AlertController, public http: Http) {
    this.http.get('http://localhost:3000/api/cities').map(res => res.json()).subscribe(data => {
      this.cities = data;
      
      this.cities.forEach( (element) => {
        var base_path = element.picture_uid.url;
        element.picture_uid.url = "http://localhost:3000" + base_path;
      });

    });


  }

  goToCityPage(cityId) {
    this.navCtrl.push(City, {'cityId': cityId});
  }

}
