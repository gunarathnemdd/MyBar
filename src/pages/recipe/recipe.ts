import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, LoadingController } from 'ionic-angular';

import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToastControllerProvider } from '../../providers/toast-controller/toast-controller';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {
  @ViewChild(Content) content: Content;

  public brand: any;
  public cocktailArray: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: HttpServicesProvider,
    public toastService: ToastControllerProvider,
		public loadingCtrl: LoadingController) {
    this.navParams = navParams
    this.brand = this.navParams.get('brand');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
    this.getRecipe(this.brand);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  getRecipe(brand) {
    console.log(brand);
    let loading = this.loadingCtrl.create({
			content: 'Get Ready...'
		});
		loading.present();
    this.service.getRecipe(brand).subscribe(data => {
      console.log(data);
      loading.dismiss();
      if (data == 0) {
        this.cocktailArray = [{ cr_name: "null" }];
      }
      else {
        this.cocktailArray = data;
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
      brand: this.brand,
      recipe: cocktail
    });
  }
}
