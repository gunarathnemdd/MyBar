import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bottle-details',
  templateUrl: 'bottle-details.html'
})
export class BottleDetailsPage {

  public brand: any;
  public liqure: any;
  public year: any;
  public company: any;
  public country: any;
  public price: any;
  public type: any;
  public quentity: any;
  public volume: any;
  public title: any;
  public image: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
    this.liqure = this.navParams.get('liqure');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    this.listDetails(this.liqure);
  }

  listDetails(liqure) {
    this.title = liqure['li_name'];
    this.image = 'assets/imgs/bottles/'+ liqure['li_id'] +'.jpg';
    this.price = liqure['price'];
    this.type = liqure['li_type'];
    this.quentity = liqure['quentity'];
    if (liqure['li_volume'] == '0') { this.volume = "-"; } else { this.volume = liqure['li_volume'] + "%"; }
    if (liqure['li_year'] == '0000') { this.year = "-"; } else { this.year = liqure['li_year']; }
    if (liqure['li_company'] == '') { this.company = "-"; } else { this.company = liqure['li_company']; }
    if (liqure['li_country'] == '') { this.country = "-"; } else { this.country = liqure['li_country']; }
  }
  
}
