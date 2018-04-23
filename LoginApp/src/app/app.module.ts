import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import {User} from '../entities/user';
import {AnaSayfaPage} from '../pages/ana-sayfa/ana-sayfa'
import { GirisPage } from '../pages/giris/giris';
import { KaydolPage} from '../pages/kaydol/kaydol';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnaSayfaPage,
    ListPage,
  
    GirisPage,
    KaydolPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnaSayfaPage,

    GirisPage,
    KaydolPage
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://localhost/uyelik/deneme3.php"},
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
