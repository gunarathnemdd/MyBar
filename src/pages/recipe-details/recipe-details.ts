import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  public recipe: any;
  public ingredientArray: any[] = [];
  public recipeName: any;
  public description: any;
  public liqure: any;
  public brand: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.navParams = navParams
    this.recipe = this.navParams.get('recipe');
    this.brand = this.navParams.get('brand');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');
    this.showRecipe(this.recipe);
  }

  showRecipe(recipe) {
    console.log(recipe);
    let ingredient = recipe['cr_ingredients'];
    let ingreArray = ingredient.split(', ');
    for (let item of ingreArray) {
      this.ingredientArray.push({ name: item });
    }
    this.recipeName = recipe['cr_name'];
    this.description = recipe['cr_description'];
    this.liqure = recipe['cr_liqureType'];
  }

}
