import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

import { FavoriteCocktailsProvider } from '../../providers/favorite-cocktails/favorite-cocktails';

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
  public isFavorite = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteCocktailsProvider) {
    this.navParams = navParams;
    this.recipe = this.navParams.get('recipe');
    this.favoriteProvider.isFavorite(this.recipe['cr_id']).then(isFav => {
      this.isFavorite = isFav;
    })
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
    this.brand = recipe['cr_liqureType'];
    this.recipeName = recipe['cr_name'];
    this.description = recipe['cr_description'];
    this.liqure = recipe['cr_liqureType'];
    this.garnishes = recipe['cr_garnishes'];
    this.image = 'https://greenic.000webhostapp.com/myBar/images/cocktail/'+ recipe['cr_id'] +'.png';
    if (recipe['cr_speciallyFor'] == '') { this.speciallyFor = recipe['cr_liqureType']; } else { this.speciallyFor = recipe['cr_speciallyFor']; }
  }

  favoriteCocktail() {
    this.favoriteProvider.favoriteCocktail(this.recipe).then((data) => {
      this.isFavorite = true;
    });
  }

  unfavoriteCocktail() {
    this.favoriteProvider.unfavoriteCocktail(this.recipe['cr_id']).then((data) => {
      this.isFavorite = false;
    });
  }

}
