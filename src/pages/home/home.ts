import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // notificationsRef : AngularFireList<any>;
  // notifications:Observable<any[]>;
  // constructor(public navCtrl: NavController) {
  // }

  constructor(public navCtrl: NavController) {

    //Peguei de https://stackoverflow.com/questions/48032291/property-query-is-missing-in-type-observable-ionic-firebase
    // this.notificationsRef = afDatabase.list('/notifications');
    // this.notifications = this.notificationsRef.valueChanges();
  }

}
