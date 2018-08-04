import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  public recipe: any;
  public ingredientArray: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.navParams = navParams
    this.recipe = this.navParams.get('recipe');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');
  }

}
