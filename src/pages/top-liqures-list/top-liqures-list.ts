import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { filter } from 'lodash';

import { BottleDetailsPage } from '../bottle-details/bottle-details';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-top-liqures-list',
  templateUrl: 'top-liqures-list.html',
})
export class TopLiquresListPage {

  public pricesArray: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad TopLiquresListPage');
    this.getTopLiqures();
  }

  getTopLiqures() {
    let loading = this.loadingCtrl.create({
      content: 'Get Ready...',
      dismissOnPageChange: true
    });
    loading.present();
    this.service.getTopLiqures().subscribe(data => {
      if (data == 0) {
        this.pricesArray = [{ li_name: "null" }];
        loading.dismiss();
      }
      else {
        loading.dismiss();
        this.pricesArray = filter(data, function(val) {
          return val['li_likes'] > 0;
        });
      }
    },
      (err) => {
        loading.dismiss();
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
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
          isTopLiquresPage: true
        });
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

}
