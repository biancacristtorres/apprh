import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsEditPage } from './notifications-edit';

@NgModule({
  declarations: [
    NotificationsEditPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsEditPage),
  ],
})
export class NotificationsEditPageModule {}
