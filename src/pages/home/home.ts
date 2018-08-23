import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { BrandPage } from '../brand/brand';
import { CocktailPage } from '../cocktail/cocktail';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public splashScreen: SplashScreen,
    public toastService: ToastControllerProvider,
    private alertCtrl: AlertController,
    private storage: Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('isOver21').then((val) => {
      this.splashScreen.hide();
      if (val != true) {
        let alert = this.alertCtrl.create({
          title: "Verify Your Age",
          enableBackdropDismiss: false,
          buttons: [{
            text: 'Under 21',
            handler: () => {
              this.storage.set('isOver21', false);
              alert.dismiss().then(() => {
                this.warningMessage();
              });
              return false;
            }
          }, {
            text: '21+',
            role: 'cancel',
            handler: () => {
              this.storage.set('isOver21', true);
            }
          }]
        });
        alert.present();
      }
    });
  }

  warningMessage() {
    let alert = this.alertCtrl.create({
      title: "Sorry!",
      subTitle: "Access to this app requires you to be of legal age.",
      enableBackdropDismiss: false,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.platform.exitApp();
        }
      }]
    });
    alert.present();
  }

  getPrices() {
    console.log('getPrices');
    this.navCtrl.push(BrandPage);
  }

  getCocktails() {
    console.log('getCocktails');
    this.navCtrl.push(CocktailPage);
  }

  getBites() {
    console.log('getBites');
    let message = "Coming Soon!";
    this.toastService.toastCtrlr(message);
  }

  rateUs() {
    console.log('rateUs');
  }
}
