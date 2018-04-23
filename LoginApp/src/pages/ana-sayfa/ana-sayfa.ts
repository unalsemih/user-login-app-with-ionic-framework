import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaydolPage } from '../kaydol/kaydol';
import { GirisPage } from '../giris/giris';
import { HomePage } from '../home/home';

/**
 * Generated class for the AnaSayfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ana-sayfa',
  templateUrl: 'ana-sayfa.html',
})
export class AnaSayfaPage {
  giris(){
    this.navCtrl.setRoot(GirisPage);
  
    console.log("girise girdi.");
  }
  kaydol(){
    console.log("kaydola girdi");
    this.navCtrl.setRoot(KaydolPage);
    
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaSayfaPage');
  }
  
}
