import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NotificationsProvider } from './../../providers/notifications/notifications';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications: Observable<any>;


  constructor(public navCtrl: NavController, private provider: NotificationsProvider,
    private toast: ToastController) {
 
    this.notifications = this.provider.getAll();
  }

  newNotifications() {
    this.navCtrl.push('NotificationsEditPage');
  }

  editNotifications(notification: any) {
    // Maneira 1
    this.navCtrl.push('NotificationsEditPage', { notification: notification });
 
    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Notificação removida sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o Notificação.', duration: 3000 }).present();
        });
    }
  }

}
