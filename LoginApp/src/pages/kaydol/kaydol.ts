import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { GirisPage } from '../giris/giris';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/user.service';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Headers} from '@angular/http';
import { User } from '../../entities/user';
import { AnaSayfaPage } from '../ana-sayfa/ana-sayfa';
/**
 * Generated class for the KaydolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kaydol',
  templateUrl: 'kaydol.html',
  providers: [UserService]
})
export class KaydolPage {
  ad:User[];

  data:Observable<any>;
  adSoyad:string="";
  kullaniciAdi: string="";
  sifre:string="";
  sifreTekrar:string="";
  ePosta:string="";
  telefon:string="";
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   public userService:UserService,
    public alertCtrl:AlertController,
    public http:Http,
 
  ) {
  }

 users:User[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad KaydolPage');
  }
  
  
  finish(){
    console.log("fibishe girdi");
    /*let alert=this.alertCtrl.create({
      title:"Login Successful",
      subTitle:"AdSoyad : "+this.adSoyad + " Kadi:"+this.kullaniciAdi + " sifre:"+this.sifre+" -- "+ this.sifreTekrar+ " Eposta : "+this.ePosta,
      buttons:['OK']
    });
    alert.present();
*/
    if(this.sifre==this.sifreTekrar)
    {//Şifreler Uyuşuyorsa
      var adim=0;

      this.userService.getUsers().subscribe(p=>{
          this.users=p
        for(adim=0; adim<this.users.length; adim++){
          if(this.kullaniciAdi==(this.users)[adim].kullaniciadi)
          {
            let alert=this.alertCtrl.create({
              title:"Kullanıcı Adı Kullanılıyor!",
              subTitle:"Lütfen kullanıcı adınızı değiştiriniz!",
              buttons:['OK']
            });
            alert.present();
  
            break;
          }
          if(adim==((this.users).length-1)){
            var url='http://localhost/uyelik/index.php/';
              let postData=new FormData();
             postData.append('kullaniciadi',this.kullaniciAdi);
             postData.append('adsoyad', this.adSoyad);
             postData.append('sifre', this.sifre);
             postData.append('posta', this.ePosta);
              postData.append('telefon',this.telefon);
             this.data=this.http.post(url,postData);
             this.data.subscribe(data=>{
             console.log(data)
  });
            let alert=this.alertCtrl.create({
              title:"Kayıt Başarılı",
              subTitle:"Tebrikler.Hoş geldiniz",
              buttons:['OK']
            });
            alert.present();
            this.navCtrl.setRoot(AnaSayfaPage);
        
          }
        }
      });

      }
    
    
    else
    {
    let alert=this.alertCtrl.create({
      title:"Kayıt Başarısız",
      subTitle:"Şifreler Uyuşmuyor",
      buttons:['OK']
    });
    alert.present();
    }
}
}
