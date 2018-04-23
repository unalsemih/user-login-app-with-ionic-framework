import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Headers} from '@angular/http';
import { HomePage } from '../home/home';
import { ElementAst } from '@angular/compiler';
import { KaydolPage } from '../kaydol/kaydol';
/**
 * Generated class for the GirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giris',
  templateUrl: 'giris.html',
})
export class GirisPage {
  password:string="";
  kullaniciAdi: string="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad GirisPage');
  }

  createNewAccount(){
    this.navCtrl.setRoot(KaydolPage);
  }
  loginControl(){
      if(this.kullaniciAdi=="" || this.password=="")
      {
        let alert=this.alertCtrl.create({
          title:"Boş Alanlar Var!",
          subTitle:"Boş Alan Bırakmayınız!",
          buttons:['OK']
        });
        alert.present();
      }
      else{
        //gerekli kontrol leri yap



        /////
          this.navCtrl.push(HomePage,
          {"isim": this.kullaniciAdi}
          );
            

      }

  }
}
