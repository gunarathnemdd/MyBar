import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';
import { FavoriteLiquresProvider } from '../../providers/favorite-liqures/favorite-liqures';

@Component({
  selector: 'page-bottle-details',
  templateUrl: 'bottle-details.html'
})
export class BottleDetailsPage {

  public liqure: any;
  public year: any;
  public company: any;
  public country: any;
  public type: any;
  public volume: any;
  public title: any;
  public image: string;
  public pricesArray: any;
  public imageUrl: any;
  public id: any;
  public isFavorite = false;
  public isFavouritePage: boolean = false;
  public isTopLiquresPage: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
    public favoriteProvider: FavoriteLiquresProvider) {
    this.navParams = navParams;
    this.liqure = this.navParams.get('liqure');
    this.pricesArray = this.navParams.get('priceList');
    this.isFavouritePage = this.navParams.get('isFavouritePage');
    this.isTopLiquresPage = this.navParams.get('isTopLiquresPage');
    this.favoriteProvider.isFavorite(this.liqure['li_id']).then(isFav => {
      this.isFavorite = isFav;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    this.listDetails(this.liqure);
  }

  listDetails(liqure) {
    this.id = liqure['li_id']; 
    this.title = liqure['li_name'];
    this.type = liqure['li_type'];
    this.image = "https://greenic.000webhostapp.com/myBar/images/bottles/" + liqure['li_id'] + ".png";
    if (liqure['li_volume'] == '0') { this.volume = "-"; } else { this.volume = liqure['li_volume'] + "%"; }
    if (liqure['li_year'] == '0000') { this.year = "-"; } else { this.year = liqure['li_year']; }
    if (liqure['li_company'] == '') { this.company = "-"; } else { this.company = liqure['li_company']; }
    if (liqure['li_country'] == '') { this.country = "-"; } else { this.country = liqure['li_country']; }
  }

  addComment() {
    let alert = this.alertCtrl.create({
      title: 'Your Comment',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }, {
          name: 'comment',
          placeholder: 'Comment'
        }
      ],
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
      }, {
        text: 'Send',
        handler: data => {
          if ((data.comment.trim() == "") || (data.name.trim() == "")) {
            let message = "Please fill all the fields.";
            this.toastService.toastCtrlr(message);
            return false;
          } else if (data.comment.length > 200) {
            console.log(data.comment.length);
            let message = "No of characters used: " + data.comment.length + "\nPlease use less than 200 characters in comment fields!";
            this.toastService.toastCtrlr(message);
            return false;
          }
          else {
            console.log(data.name.trim(), data.comment.trim());
            this.service.saveComments(data.name.trim(), data.comment.trim()).subscribe(data => {
              console.log(data);
              if (data['response'] == 'success') {
                let message = "Thanks for your valued comment!";
                this.toastService.toastCtrlr(message);
              }
              else {
                let message = "Network error! Please check your internet connection.";
                this.toastService.toastCtrlr(message);
              }
            },
              (err) => {
                let message = "Network error! Please check your internet connection.";
                this.toastService.toastCtrlr(message);
              });
          }
        }
      }]
    });
    alert.present();
  }

  favoriteLiqure() {
    this.favoriteProvider.favoriteLiqure(this.liqure).then((data) => {
      console.log(data);
      this.isFavorite = true;
    });
    this.favoriteProvider.favoriteLiqureType(this.liqure['li_type']).then((data) => {
      console.log(data);
    });
    this.service.doLikeLiqure(this.id, true).subscribe(data => {
      console.log(data);
      if (data['response'] == 'error') {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }

  unfavoriteLiqure() {
    this.favoriteProvider.unfavoriteLiqure(this.liqure['li_id']).then((data) => {
      console.log(data);
      this.isFavorite = false;
    });
    this.favoriteProvider.unfavoriteLiqureType(this.liqure['li_type']).then((data) => {
      console.log(data);
    });
    this.service.doLikeLiqure(this.id, false).subscribe(data => {
      console.log(data);
      if (data['response'] == 'error') {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      }
    },
      (err) => {
        let message = "Network error! Please check your internet connection.";
        this.toastService.toastCtrlr(message);
      });
  }
}
