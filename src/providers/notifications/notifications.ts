// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {

  private PATH = '/notifications';
  
  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH).snapshotChanges().map(changes => {
        return changes.map(itens => ({ key: itens.payload.key, ...itens.payload.val() }));
      });
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(itens => {
        return { key: itens.key, ...itens.payload.val() };
      });
  }

  save(notification: any) {
    return new Promise((resolve, reject) => {
      if (notification.key) {
        this.db.list(this.PATH)
          .update(notification.key, { title: notification.title, from: notification.from, date: notification.date})
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ title: notification.title, from: notification.from, date: notification.date })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

}
