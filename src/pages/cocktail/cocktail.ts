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

  cocktails(brand) {
    this.navCtrl.push(RecipePage, {
      brand: brand
    });
  }

}
