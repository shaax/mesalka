import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SkupinePage } from '../pages/skupine/skupine';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/login/login';
import { DodajPage } from '../pages/dodaj/dodaj';
import { GlasbenikPage } from '../pages/dodaj/glasbenik';
import { SkupinaPage } from '../pages/dodaj/skupina';
import { LokacijaPage } from '../pages/dodaj/lokacija';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SkupinePage,
    HomePage,
    TabsPage,
    InfoPage,
    LoginPage,
    DodajPage,
    GlasbenikPage,
    SkupinaPage,
    LokacijaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SkupinePage,
    HomePage,
    TabsPage,
    InfoPage,
    LoginPage,
    DodajPage,
    GlasbenikPage,
    SkupinaPage,
    LokacijaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
