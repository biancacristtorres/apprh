import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated"; 
//import { AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Notifications{
  title: string;
  from: string;
  data: string;
  lida: boolean
}

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  lista: FirebaseListObservable<any>;
  notifications: Notifications;

  constructor(public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.lista = this.afDatabase.list('/notifications');
    this.notifications = new Notifications();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
