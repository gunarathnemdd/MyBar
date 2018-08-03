import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastControllerProvider {

  constructor(public toastCtrl: ToastController) {
  }

  toastCtrlr(message: string) {
    let toast = this.toastCtrl.create({
			message: message,
			duration: 5000,
			position: 'bottom'
		});
		toast.present();
  }

}
