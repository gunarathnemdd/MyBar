import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { ToastControllerProvider } from '../providers/toast-controller/toast-controller';
import { AlertControllerProvider } from '../providers/alert-controller/alert-controller';

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
    AutohideDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    BottleDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServicesProvider,
    ToastControllerProvider,
    AlertControllerProvider
  ]
})
export class AppModule {}
