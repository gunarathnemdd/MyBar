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
}
