import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { filter } from 'lodash';

import { RecipeDetailsPage } from '../recipe-details/recipe-details';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-top-cocktails-list',
  templateUrl: 'top-cocktails-list.html',
})
export class TopCocktailsListPage {

  public cocktailArray: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TopCocktailsListPage');
    this.showFavourite();
  }

  showFavourite() {
    let loading = this.loadingCtrl.create({
      content: 'Get Ready...',
      dismissOnPageChange: true
    });
    loading.present();
    this.service.getTopCocktails().subscribe(data => {
      console.log(data);
      if (data == 0) {
        this.cocktailArray = [{ cr_name: "null" }];
        loading.dismiss();
      }
      else {
        loading.dismiss();
        this.cocktailArray = filter(data, function(val) {
          return val['cr_likes'] > 0;
        });
      }
    },
      (err) => {
        loading.dismiss();
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  showDetails(cocktail) {
    this.navCtrl.push(RecipeDetailsPage, {
      recipe: cocktail,
      isTopCocktailsPage: true
    });
  }

}
