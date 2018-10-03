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

  getBottleDetails(liqureId) {
    return this.http.get(this.host + '/getBottleDetails.php?liqureId=' + liqureId);
  }

  getRecipe(brand) {
    return this.http.get(this.host + '/getRecipe.php?brand=' + brand);
  }

  saveComments(name, comment) {
    return this.http.get(this.host + '/saveComments.php?name=' + name + '&comment=' + comment);
  }

  doLikeLiqure(liqureId, state) {
    return this.http.get(this.host + '/doLikeLiqure.php?liqureId=' + liqureId + '&state=' + state);
  }

  doLikeCocktail(cocktailId, state) {
    return this.http.get(this.host + '/doLikeCocktail.php?cocktailId=' + cocktailId + '&state=' + state);
  }

  getTopLiqures() {
    return this.http.get(this.host + '/getTopLiqures.php');
  }

  getTopCocktails() {
    return this.http.get(this.host + '/getTopCocktails.php');
  }

  createCocktails(user_name, user_email, cocktail_name, liqure_types, preparation_method, ingredients, specially_for) {
    return this.http.get(this.host + '/createCocktails.php?user_name=' + user_name + '&user_email=' + user_email + '&cocktail_name=' + cocktail_name + '&liqure_types=' + liqure_types + '&preparation_method=' + preparation_method + '&ingredients=' + ingredients + '&specially_for=' + specially_for);
  }

}
