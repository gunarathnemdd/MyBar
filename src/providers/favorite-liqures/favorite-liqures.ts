import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteLiqures';
const STORAGE_KEY_2 = 'favoriteLiqureTypes';

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

  unfavoriteLiqure(liqureId) {
    return this.getAllFavoriteLiqures().then(result => {
      if (result) {
        var index = result.map(function (e) { return e.li_id; }).indexOf(liqureId)
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllFavoriteLiqures() {
    return this.storage.get(STORAGE_KEY);
  }

  favoriteLiqureType(liqureType) {
    return this.getAllFavoriteLiqureTypes().then(result => {
      if (result) {
        result.push(liqureType);
        return this.storage.set(STORAGE_KEY_2, result);
      } else {
        return this.storage.set(STORAGE_KEY_2, [liqureType]);
      }
    });
  }

  unfavoriteLiqureType(liqureType) {
    return this.getAllFavoriteLiqureTypes().then(result => {
      if (result) {
        var index = result.indexOf(liqureType);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY_2, result);
      }
    });
  }

  getAllFavoriteLiqureTypes() {
    return this.storage.get(STORAGE_KEY_2);
  }
}
