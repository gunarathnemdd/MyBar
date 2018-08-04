import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeDetailsPage } from '../recipe-details/recipe-details';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  public brand: any;
  public cocktailArray: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    this.getRecipe(this.brand);
  }

  getRecipe(brand) {
    
  }
  
  showDetails(cocktail) {
    this.navCtrl.push(RecipeDetailsPage, {
      recipe: cocktail
    });
  }
}
