import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, LoadingController } from 'ionic-angular';
import { orderBy } from 'lodash';

import { BottleDetailsPage } from '../bottle-details/bottle-details';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';
import { AlertControllerProvider } from '../../providers/alert-controller/alert-controller';

@Component({
  selector: 'page-prices',
  templateUrl: 'prices.html'
})
export class PricesPage {
  @ViewChild(Content) content: Content;

  public brand: any;
  public quentity: any;
  public pricesArray: any;//[] = [];
  public oldPriceArray: any;
  public quentityArray: any;//[] = [];
  public pricesArrayLength: any;
  public infiniteScrollEnabled: boolean;
  public sortBy: any;
  public isSearchBarOpened: boolean = false;
  //public offset: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public alertService: AlertControllerProvider,
    public loadingCtrl: LoadingController) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
    this.quentity = this.navParams.get('quentity');
    //this.sortBy = "li_name";
    //this.infiniteScrollEnabled = true;
  }

  ionViewDidLoad() {
    //this.getPriceLength(this.quentity);
    this.getPrice();
    this.getQuentity(this.brand);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  // getPriceLength(quentity) {
  //   this.service.getPriceLength(this.brand, quentity).subscribe(data => {
  //     console.log(data);
  //     if (data == 0) {
  //       this.pricesArrayLength = 0;
  //     }
  //     else {
  //       this.pricesArrayLength = data[0]['length'];
  //     }
  //   },
  //     (err) => {
  //       let message = "Network error! Please check your internet connection.";
  //       this.toastService.toastCtrlr(message);
  //     });
  // }

  getPrice() {
    this.scrollToTop();
    let loading = this.loadingCtrl.create({
      content: 'Get Ready...'
    });
    loading.present();
    this.sortBy = "li_name";
    this.service.getPrice(this.brand, this.quentity, 0, "li_name").subscribe(data => {
      console.log(data);
      loading.dismiss();
      if (data == 0) {
        this.pricesArray = [{ li_name: "null" }];
        this.oldPriceArray = [{ li_name: "null" }];
      }
      else {
        this.pricesArray = data;
        this.oldPriceArray = data;
      }
    },
      (err) => {
        loading.dismiss();
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

  sortPriceList() {
    let sortBy = this.sortBy;
    if (sortBy == 'li_name') {
      this.pricesArray = orderBy(this.pricesArray, ['li_name'], ['asc']);
    }
    else if (sortBy == 'price') {
      this.pricesArray = orderBy(this.pricesArray, ['price'], ['asc']);
    }
  }

  // priceListUpdate() {
  //   console.log(this.quentity, this.sortBy);
  //   this.scrollToTop();
  //   this.isSearchBarOpened = false;
  //   //this.infiniteScrollEnabled = true;
  //   //this.offset = 0;
  //   //this.getPriceLength(this.quentity);
  //   let loading = this.loadingCtrl.create({
  //     content: 'Get Ready...'
  //   });
  //   loading.present();
  //   this.service.getPrice(this.brand, this.quentity, 0, this.sortBy).subscribe(data => {
  //     console.log(data);
  //     loading.dismiss();
  //     if (data == 0) {
  //       this.pricesArray = [{ li_name: "null" }];
  //       this.oldPriceArray = [{ li_name: "null" }];
  //     }
  //     else {
  //       this.pricesArray = data;
  //       this.oldPriceArray = data;
  //     }
  //   },
  //     (err) => {
  //       loading.dismiss();
  //       this.pricesArray = [{ li_name: "noNetwork" }];
  //       let message = "Network error! Please check your internet connection.";
  //       this.toastService.toastCtrlr(message);
  //     });
  // }

  searchByName(event) {
    console.log("value: " + event.target.value);
    this.scrollToTop();
    //this.infiniteScrollEnabled = true;
    //this.offset = 0;
    let searchText = event.target.value;
    if (searchText != "") {
      this.service.searchPrice(this.brand, this.quentity, 0, this.sortBy, searchText).subscribe(data => {
        console.log(data);
        if (data == 0) {
          this.pricesArray = [{ li_name: "null" }];
        }
        else {
          this.pricesArray = data;
        }
      },
        (err) => {
          this.pricesArray = [{ li_name: "noNetwork" }];
          let message = "Network error! Please check your internet connection.";
          this.toastService.toastCtrlr(message);
        });
    }
    else {
      this.sortBy = "li_name";
      this.pricesArray = this.oldPriceArray;
    }
  }

  showDetails(liqure) {
    this.service.getBottlePrices(liqure['li_id']).subscribe(data => {
      console.log(data);
      if (data == 0) {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
      else {
        this.navCtrl.push(BottleDetailsPage, {
          brand: this.brand,
          liqure: liqure,
          priceList: data
        });
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  // doInfinite(infiniteScroll) {
  //   console.log(this.offset, this.pricesArrayLength);
  //   if ((this.offset + 20) < this.pricesArrayLength) {
  //     this.offset = this.offset + 20;
  //     this.service.getPrice(this.brand, this.quentity, this.offset, this.sortBy).subscribe(data => {
  //       console.log(data);
  //       if (data == 0) {
  //         this.pricesArray = [{ li_name: "null" }];
  //         this.oldPriceArray = [{ li_name: "null" }];
  //         infiniteScroll.complete();
  //       }
  //       else {
  //         this.pricesArray = this.pricesArray.concat(data);
  //         this.oldPriceArray = this.pricesArray.concat(data);
  //         infiniteScroll.complete();
  //       }
  //     },
  //       (err) => {
  //         let message = "Network error! Please check your internet connection.";
  //         this.toastService.toastCtrlr(message);
  //       });
  //   }
  //   else {
  //     this.offset = 0;
  //     //this.infiniteScrollEnabled = false;
  //   }
  // }

}
