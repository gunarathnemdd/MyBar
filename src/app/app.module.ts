import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BitePage } from '../pages/bite/bite';
import { PricesPage } from '../pages/prices/prices';
import { BrandPage } from '../pages/brand/brand';
import { QuentityPage } from '../pages/quentity/quentity';
import { CocktailPage } from '../pages/cocktail/cocktail';
import { RecipePage } from '../pages/recipe/recipe';
import { RecipeDetailsPage } from '../pages/recipe-details/recipe-details';
import { BottleDetailsPage } from '../pages/bottle-details/bottle-details';
import { FavouriteCocktailsListPage } from '../pages/favourite-cocktails-list/favourite-cocktails-list';
import { FavouriteLiquresListPage } from '../pages/favourite-liqures-list/favourite-liqures-list';
import { TopLiquresListPage } from '../pages/top-liqures-list/top-liqures-list';
import { TopCocktailsListPage } from '../pages/top-cocktails-list/top-cocktails-list';
import { CreateCustomCocktailPage } from '../pages/create-custom-cocktail/create-custom-cocktail';

import { HttpServicesProvider } from '../providers/http-services/http-services';
import { ToastControllerProvider } from '../providers/toast-controller/toast-controller';
import { AlertControllerProvider } from '../providers/alert-controller/alert-controller';
import { FavoriteCocktailsProvider } from '../providers/favorite-cocktails/favorite-cocktails';
import { FavoriteLiquresProvider } from '../providers/favorite-liqures/favorite-liqures';

import { AutohideDirective } from '../directives/autohide/autohide';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BitePage,
    PricesPage,
    BrandPage,
    QuentityPage,
    CocktailPage,
    RecipePage,
    RecipeDetailsPage,
    BottleDetailsPage,
    AutohideDirective,
    FavouriteCocktailsListPage,
    FavouriteLiquresListPage,
    TopLiquresListPage,
    TopCocktailsListPage,
    CreateCustomCocktailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BitePage,
    PricesPage,
    BrandPage,
    QuentityPage,
    CocktailPage,
    RecipePage,
    RecipeDetailsPage,
    BottleDetailsPage,
    FavouriteCocktailsListPage,
    FavouriteLiquresListPage,
    TopLiquresListPage,
    TopCocktailsListPage,
    CreateCustomCocktailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServicesProvider,
    ToastControllerProvider,
    AlertControllerProvider,
    FavoriteCocktailsProvider,
    FavoriteLiquresProvider
  ]
})
export class AppModule {}
