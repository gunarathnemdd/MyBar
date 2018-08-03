import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrandPage } from '../brand/brand';
import { CocktailPage } from '../cocktail/cocktail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public splashScreen: SplashScreen) {

  }

  ionViewDidLoad() {
    this.splashScreen.hide();
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
  }

  rateUs() {
    console.log('rateUs');
  }
}
