import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { orderBy, filter, uniq } from 'lodash';

import { BottleDetailsPage } from '../bottle-details/bottle-details';

import { FavoriteLiquresProvider } from '../../providers/favorite-liqures/favorite-liqures';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-favourite-liqures-list',
  templateUrl: 'favourite-liqures-list.html',
})
export class FavouriteLiquresListPage {
  @ViewChild(Content) content: Content;
  
  public type: any;
  public pricesArray: any;
  public liqureTypeArray: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteProvider: FavoriteLiquresProvider,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad FavouriteLiquresListPage');
    this.getLiqureType();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  getPrice() {
    //this.scrollToTop();
    this.favoriteProvider.getAllFavoriteLiqures().then(data => {
      if (data) {
        if (data.length == 0) {
          this.pricesArray = [{ li_name: "null" }];
        }
        else {
          this.pricesArray = filter(data, ['li_type', this.type]);
          this.pricesArray = orderBy(this.pricesArray, ['li_name'], ['asc']);
        }
      }
      else {
        this.pricesArray = [{ li_name: "null" }];
      }
    })
  }

  getLiqureType() {
    this.favoriteProvider.getAllFavoriteLiqureTypes().then(data => {
      if (data) {
        if (data.length == 0) {
          this.liqureTypeArray = [];
          this.getPrice();
        }
        else {
          this.liqureTypeArray = uniq(data);
          this.type = this.liqureTypeArray[0];
          this.getPrice();
        }
      }
      else {
        this.liqureTypeArray = [];
        this.getPrice();
      }
    });
  }

  showDetails(liqure) {
    this.service.getBottlePrices(liqure['li_id']).subscribe(data => {
      if (data == 0) {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
      else {
        this.navCtrl.push(BottleDetailsPage, {
          liqure: liqure,
          priceList: data,
          isFavouritePage: true
        });
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

}
