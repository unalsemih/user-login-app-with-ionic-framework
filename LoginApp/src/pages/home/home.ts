import { NavController, NavParams } from 'ionic-angular';
import { Component , ViewChild} from '@angular/core';
//import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  adSoyad:string=this.navParams.get("isim");
  result:any=[];
  data:Observable<any>;
  constructor(public navCtrl: NavController,public http:Http,public navParams:NavParams) {
    this.getData();
  }
    getData(){
     console.log("aa");
      var url='http://localhost/uyelik/deneme3.php';
      this.data=this.http.get(url);
      this.data.subscribe(data=> {
        this.result=data;
      });
    
  }
 
}
