import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsProvider } from './../../providers/notifications/notifications';

/**
 * Generated class for the NotificationsEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications-edit',
  templateUrl: 'notifications-edit.html',
})
export class NotificationsEditPage {

  title: string;
  form: FormGroup;
  notification: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: NotificationsProvider,
    private toast: ToastController) {
 
    // maneira 1
    this.notification = this.navParams.data.notification || { };
    this.createForm();
 
    // // maneira 2
    // this.contact = { };
    // this.createForm();
 
    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();
 
    //     this.contact = c;
    //     this.createForm();
    //   })
    // }
 
    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.notification ? 'Alterando notification' : 'Nova notification';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.notification.key],
      title: [this.notification.title, Validators.required],
      from: [this.notification.from, Validators.required],
      date: [this.notification.date, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Notification salva com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o notification.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }


}
