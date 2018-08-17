import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {
  @ViewChild(Content) content: Content;

  public recipe: any;
  public ingredientArray: any[] = [];
  public recipeName: any;
  public description: any;
  public liqure: any;
  public brand: any;
  public speciallyFor: any;
  public garnishes: any;
  public image: any;

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

  scrollToTop() {
    this.content.scrollToTop();
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
    this.speciallyFor = recipe['cr_speciallyFor'];
    this.garnishes = recipe['cr_garnishes'];
    this.image = 'assets/imgs/cocktail/'+ recipe['cr_id'] +'.jpg';
  }

}
