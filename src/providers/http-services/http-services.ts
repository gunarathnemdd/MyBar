import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServicesProvider {

  public host = 'https://greenic.000webhostapp.com/myBar';

  constructor(public http: HttpClient) {
  }

  getPriceLength(brand, quentity) {
    return this.http.get(this.host + '/getPriceLength.php?brand=' + brand + '&quentity=' + quentity);
  }

  searchPrice(brand, quentity, offset, sortBy, searchText) {
    return this.http.get(this.host + '/searchPrice.php?brand=' + brand + '&quentity=' + quentity + '&offset=' + offset + '&sortBy=' + sortBy + '&searchBy=' + searchText);
  }

  getPrice(brand, quentity, offset, sortBy) {
    return this.http.get(this.host + '/getPrice.php?brand=' + brand + '&quentity=' + quentity + '&offset=' + offset + '&sortBy=' + sortBy);
  }

  getQuentity(brand) {
    return this.http.get(this.host + '/getQuentity.php?brand=' + brand);
  }

  getBottlePrices(liqureId) {
    return this.http.get(this.host + '/getBottlePrices.php?liqureId=' + liqureId);
  }

  getRecipe(brand) {
    return this.http.get(this.host + '/getRecipe.php?brand=' + brand);
  }

}
