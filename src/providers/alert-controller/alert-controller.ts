import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertControllerProvider {

  constructor(public alertCtrl: AlertController) {
  }

  alertCtrlr(title: string, message: string, buttons: any) {
    let confirmAlert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: buttons
    });
    confirmAlert.present();
  }

}
