import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PricesPage } from '../pages/prices/prices';
import { BrandPage } from '../pages/brand/brand';
import { QuentityPage } from '../pages/quentity/quentity';
import { CocktailPage } from '../pages/cocktail/cocktail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { ToastControllerProvider } from '../providers/toast-controller/toast-controller';
import { AlertControllerProvider } from '../providers/alert-controller/alert-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PricesPage,
    BrandPage,
    QuentityPage,
    CocktailPage
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
    ListPage,
    PricesPage,
    BrandPage,
    QuentityPage,
    CocktailPage
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
