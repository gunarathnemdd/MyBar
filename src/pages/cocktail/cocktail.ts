import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PricesPage } from '../prices/prices';

@Component({
  selector: 'page-cocktail',
  templateUrl: 'cocktail.html',
})
export class CocktailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailPage');
  }

  beerCocktails() {
    console.log('beerCocktails');
    // this.navCtrl.push(PricesPage, {
    //   brand: 'Beer',
    //   quentity: 300
    // });
  }

  wineCocktails() {
    console.log('wineCocktails');
    // this.navCtrl.push(PricesPage, {
    //   brand: 'Wine',
    //   quentity: 750
    // });
  }

  brandyCocktails() {
    console.log('brandyCocktails');
    // this.navCtrl.push(PricesPage, {
    //   brand: 'Brandy',
    //   quentity: 750
    // });
  }

  wiskyCocktails() {
    console.log('wiskyCocktails');
    // this.navCtrl.push(PricesPage, {
    //   brand: 'Wisky',
    //   quentity: 750
    // });
  }

  vodkaCocktails() {
    console.log('vodkaCocktails');
    // this.navCtrl.push(PricesPage, {
    //   brand: 'Vodka',
    //   quentity: 750
    // });
  }
}
