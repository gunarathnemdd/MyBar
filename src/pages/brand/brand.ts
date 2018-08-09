import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PricesPage } from '../prices/prices';

@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandPage');
  }

  prices(brand, quentity) {
    console.log('prices');
    this.navCtrl.push(PricesPage, {
      brand: brand,
      quentity: quentity
    });
  }

  beerPrices() {
    console.log('beerPrices');
    this.navCtrl.push(PricesPage, {
      brand: 'Beer',
      quentity: 300
    });
  }

  winePrices() {
    console.log('winePrices');
    this.navCtrl.push(PricesPage, {
      brand: 'Wine',
      quentity: 750
    });
  }

  brandyPrices() {
    console.log('brandyPrices');
    this.navCtrl.push(PricesPage, {
      brand: 'Brandy',
      quentity: 750
    });
  }

  wiskyPrices() {
    console.log('wiskyPrices');
    this.navCtrl.push(PricesPage, {
      brand: 'Whisky',
      quentity: 750
    });
  }

  vodkaPrices() {
    console.log('vodkaPrices');
    this.navCtrl.push(PricesPage, {
      brand: 'Vodka',
      quentity: 750
    });
  }
}
