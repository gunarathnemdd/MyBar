import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';
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
  public id: any;
  public isFavouritePage: boolean = false;
  public isTopCocktailsPage: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteCocktailsProvider,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider) {
    this.navParams = navParams;
    this.recipe = this.navParams.get('recipe');
    this.brand = this.navParams.get('brand');
    this.isFavouritePage = this.navParams.get('isFavouritePage');
    this.isTopCocktailsPage = this.navParams.get('isTopCocktailsPage');
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
    this.id = this.recipe['cr_id'];
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
    this.service.doLikeCocktail(this.id, true).subscribe(data => {
      console.log(data);
      if (data['response'] == 'error') {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  unfavoriteCocktail() {
    this.favoriteProvider.unfavoriteCocktail(this.recipe['cr_id']).then((data) => {
      this.isFavorite = false;
    });
    this.service.doLikeCocktail(this.id, false).subscribe(data => {
      console.log(data);
      if (data['response'] == 'error') {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

}
