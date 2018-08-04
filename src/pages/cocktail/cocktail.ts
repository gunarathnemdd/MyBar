import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-cocktail',
  templateUrl: 'cocktail.html',
})
export class CocktailPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocktailPage');
  }

  beerCocktails() {
    console.log('beerCocktails');
    this.navCtrl.push(RecipePage, {
      brand: 'Beer'
    });
  }

  wineCocktails() {
    console.log('wineCocktails');
    this.navCtrl.push(RecipePage, {
      brand: 'Wine'
    });
  }

  brandyCocktails() {
    console.log('brandyCocktails');
    this.navCtrl.push(RecipePage, {
      brand: 'Brandy'
    });
  }

  wiskyCocktails() {
    console.log('wiskyCocktails');
    this.navCtrl.push(RecipePage, {
      brand: 'Wisky'
    });
  }

  vodkaCocktails() {
    console.log('vodkaCocktails');
    this.navCtrl.push(RecipePage, {
      brand: 'Vodka'
    });
  }
}
