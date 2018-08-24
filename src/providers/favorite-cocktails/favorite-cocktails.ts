import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteCocktails';

@Injectable()
export class FavoriteCocktailsProvider {

  constructor(
    public storage: Storage) {
    console.log('Hello FavoriteCocktailsProvider Provider');
  }

  isFavorite(cocktailId) {
    return this.getAllFavoriteCocktails().then(result => {
      if (result) {
        return result && result.map(function (e) { return e.cr_id; }).indexOf(cocktailId) !== -1;
        //return result && result.indexOf(cocktailId) !== -1;
      }
      else {
        return false;
      }
    });
  }

  favoriteCocktail(cocktail) {
    return this.getAllFavoriteCocktails().then(result => {
      if (result) {
        result.push(cocktail);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [cocktail]);
      }
    });
  }

  unfavoriteCocktail(cocktail) {
    return this.getAllFavoriteCocktails().then(result => {
      if (result) {
        var index = result.indexOf(cocktail);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteCocktails() {
    return this.storage.get(STORAGE_KEY);
  }
}
