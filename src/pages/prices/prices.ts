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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public alertService: AlertControllerProvider) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
    this.quentity = this.navParams.get('quentity');
  }

  ionViewDidLoad() {
    this.getPrice(this.quentity);
    this.getQuentity(this.brand);
  }

  getPrice(quentity) {
    this.service.getPrice(this.brand, quentity).subscribe(data => {
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
    this.service.getPrice(this.brand, this.quentity).subscribe(data => {
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
    // let volume;
    // let year;
    // let company;
    // let country;
    // let price = liqure['price'];
    // let type = liqure['li_type'];
    // let quentity = liqure['quentity'];
    // let brand = liqure['li_brand'];
    // if(liqure['li_volume'] == '0') { volume = "-"; } else { volume = liqure['li_volume'] + "%"; }
    // if(liqure['li_year'] == '0000') { year = "-"; } else { year = liqure['li_year']; }
    // if(liqure['li_company'] == '') { company = "-"; } else { company = liqure['li_company']; }
    // if(liqure['li_country'] == '') { country = "-"; } else { country = liqure['li_country']; }
    // let title = liqure['li_name'];
    // //let message = "<strong>Price:</strong> Rs." + price + "<br><strong>Type:</strong> " + type + "<br><strong>V/V:</strong> " + volume + "<br><strong>Volume:</strong> " + quentity + " ml<br><strong>Year:</strong> " + year + "<br><strong>Brand:</strong> " + brand + "<br><strong>Company:</strong> " + company + "<br><strong>Country:</strong> " + country;
    // let message = "<p><strong>Price:</strong> Rs." + price + "</p><p><strong>Type:</strong> " + type + "</p><p><strong>V/V:</strong> " + volume + "</p><p><strong>Volume:</strong> " + quentity + " ml</p><p><strong>Year:</strong> " + year + "</p><p><strong>Brand:</strong> " + brand + "</p><p><strong>Company:</strong> " + company + "</p><p><strong>Country:</strong> " + country;
    // let buttons = [{ text: 'OK', role: 'cancel' }];
    // this.alertService.alertCtrlr(title, message, buttons);
  }

  // alertCtrlr(title: string, message: string, buttons: any) {
  //   let confirmAlert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: message,
  //     buttons: buttons
  //   });
  //   confirmAlert.present();
  // }

}
