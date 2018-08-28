import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { orderBy } from 'lodash';

import { RecipeDetailsPage } from '../recipe-details/recipe-details';

import { FavoriteCocktailsProvider } from '../../providers/favorite-cocktails/favorite-cocktails';

@Component({
  selector: 'page-favourite-cocktails-list',
  templateUrl: 'favourite-cocktails-list.html',
})
export class FavouriteCocktailsListPage {
  @ViewChild(Content) content: Content;

  public cocktailArray: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteCocktailsProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter RecipePage');
    this.showFavourite();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  showFavourite() {
    this.favoriteProvider.getAllFavoriteCocktails().then(data => {
      if (data) {
        if (data.length == 0) {
          this.cocktailArray = [{ cr_name: "null" }];
        }
        else {
          this.cocktailArray = orderBy(data, ['cr_name'], ['asc']);
        }
      }
      else {
        this.cocktailArray = [{ cr_name: "null" }];
      }
    })
  }

  showDetails(cocktail) {
    this.navCtrl.push(RecipeDetailsPage, {
      recipe: cocktail
    });
  }
}
