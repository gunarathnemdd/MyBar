import { Component, ViewChild } from '@angular/core';
import { Nav, App, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
import { BitePage } from '../pages/bite/bite';
import { BrandPage } from '../pages/brand/brand';
import { CocktailPage } from '../pages/cocktail/cocktail';
import { FavouriteCocktailsListPage } from '../pages/favourite-cocktails-list/favourite-cocktails-list';
import { FavouriteLiquresListPage } from '../pages/favourite-liqures-list/favourite-liqures-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  public lastBack: any = Date.now();
  public allowClose: boolean = false;

  constructor(
    public app: App,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public toastCtrl: ToastController,
    private admobFree: AdMobFree) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Prices', component: BrandPage },
      { title: 'Cocktails', component: CocktailPage },
      { title: 'Bites (Coming Soon!)', component: BitePage },
      { title: 'Favourite Drinks', component: FavouriteLiquresListPage },
      { title: 'Favourite Cocktails', component: FavouriteCocktailsListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));

      this.platform.registerBackButtonAction(() => {
        const overlay = this.app._appRoot._overlayPortal.getActive();
        const nav = this.app.getActiveNav();
        const closeDelay = 2000;
        const spamDelay = 500;

        if (overlay && overlay.dismiss) {
          overlay.dismiss();
        } else if (nav.canGoBack()) {
          nav.pop();
        } else if (Date.now() - this.lastBack > spamDelay && !this.allowClose) {
          this.allowClose = true;
          let toast = this.toastCtrl.create({
            message: "Press BACK again to exit",
            duration: closeDelay,
            dismissOnPageChange: true
          });
          toast.onDidDismiss(() => {
            this.allowClose = false;
          });
          toast.present();
        } else if (Date.now() - this.lastBack < closeDelay && this.allowClose) {
          this.platform.exitApp();
        }
        this.lastBack = Date.now();
      });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
