import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BottleDetailsPage } from '../bottle-details/bottle-details';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';
import { AlertControllerProvider } from '../../providers/alert-controller/alert-controller';

@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})
export class PricesPage {

  public brand: any;
  public quentity: any;
  public pricesArray: any;//[] = [];
  public quentityArray: any;//[] = [];
  public pricesArrayLength: any;
  public infiniteScrollEnabled: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public alertService: AlertControllerProvider) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
    this.quentity = this.navParams.get('quentity');
    this.infiniteScrollEnabled = false;
  }

  ionViewDidLoad() {
    this.getPriceLength(this.quentity);
    this.getPrice(this.quentity);
    this.getQuentity(this.brand);
  }

  getPriceLength(quentity) {
    this.service.getPriceLength(this.brand, quentity).subscribe(data => {
      console.log(data);
      if (data == 0) {
        this.pricesArrayLength = 0;
      }
      else {
        this.pricesArrayLength = data[0]['length'];
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  getPrice(quentity) {
    this.service.getPrice(this.brand, quentity, 0).subscribe(data => {
      console.log(data);
      if (data == 0) {
        this.pricesArray = [{ li_name: "null" }];
      }
      else {
        this.pricesArray = data;
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  getQuentity(brand) {
    this.service.getQuentity(brand).subscribe(data => {
      console.log(data);
      if (data == 0) {
        this.quentityArray = [{ quentity: "no results" }];
      }
      else {
        this.quentityArray = data;
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  changeQuentity() {
    this.getPriceLength(this.quentity);
    this.service.getPrice(this.brand, this.quentity, 0).subscribe(data => {
      console.log(data);
      if (data == 0) {
        this.pricesArray = [{ li_name: "null" }];
      }
      else {
        this.pricesArray = data;
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  showDetails(liqure) {
    console.log(liqure);
    this.navCtrl.push(BottleDetailsPage, {
      brand: this.brand,
      liqure: liqure
    });
  }

  // doInfinite(infiniteScroll) {
  //   this.service.getPrice(this.brand, this.quentity, 10).subscribe(data => {
  //     console.log(data);
  //     if (data == 0) {
  //       this.pricesArray = [{ li_name: "null" }];
  //       infiniteScroll.complete();
  //     }
  //     else {
  //       this.pricesArray = this.pricesArray.concat(data);
  //       infiniteScroll.complete();
  //     }
  //   },
  //     (err) => {
  //       let message = "Network error! Please check your internet connection.";
  //       this.toastService.toastCtrlr(message);
  //     });
  // }

}
