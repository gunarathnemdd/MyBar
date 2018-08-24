import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteLiqures';

@Injectable()
export class FavoriteLiquresProvider {

  constructor(
    public storage: Storage) {
    console.log('Hello FavoriteLiquresProvider Provider');
  }

  isFavorite(liqureId) {
    return this.getAllFavoriteLiqures().then(result => {
      if (result) {
        return result && result.map(function (e) { return e.li_id; }).indexOf(liqureId) !== -1;
        //return result && result.indexOf(cocktailId) !== -1;
      }
      else {
        return false;
      }
    });
  }

  favoriteLiqure(liqure) {
    return this.getAllFavoriteLiqures().then(result => {
      if (result) {
        result.push(liqure);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [liqure]);
      }
    });
  }

  unfavoriteLiqure(liqure) {
    return this.getAllFavoriteLiqures().then(result => {
      if (result) {
        var index = result.indexOf(liqure);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteLiqures() {
    return this.storage.get(STORAGE_KEY);
  }
}
