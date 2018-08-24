import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, LoadingController } from 'ionic-angular';
//import { orderBy } from 'lodash';

import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';
import { FavoriteCocktailsProvider } from '../../providers/favorite-cocktails/favorite-cocktails';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  @ViewChild(Content) content: Content;

  public brand: any;
  public cocktailArray: any;
  //public isFavouritePage: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public loadingCtrl: LoadingController,
    public favoriteProvider: FavoriteCocktailsProvider) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
    //this.isFavouritePage = this.navParams.get('isFavouritePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    //if (!this.isFavouritePage) {
      this.getRecipe(this.brand);
    // }
    // else {
    //   this.showFavourite();
    // }
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  getRecipe(brand) {
    console.log(brand);
    let loading = this.loadingCtrl.create({
      content: 'Get Ready...'
    });
    loading.present();
    this.service.getRecipe(brand).subscribe(data => {
      console.log(data);
      loading.dismiss();
      if (data == 0) {
        this.cocktailArray = [{ cr_name: "null" }];
      }
      else {
        this.cocktailArray = data;
      }
    },
      (err) => {
        loading.dismiss();
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  // showFavourite() {
  //   this.favoriteProvider.getAllFavoriteCocktails().then(data => {
  //     console.log(data);
  //     this.cocktailArray = orderBy(data, ['cr_name'], ['asc']);
  //   })
  // }

  showDetails(cocktail) {
    //if (!this.isFavouritePage) {
      this.navCtrl.push(RecipeDetailsPage, {
        brand: this.brand,
        recipe: cocktail
      });
    // }
    // else {
    //   this.navCtrl.push(RecipeDetailsPage, {
    //     brand: this.brand,
    //     recipe: cocktail,
    //     isFavouritePage: true
    //   });
    // }
  }
}
