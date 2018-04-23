import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnaSayfaPage } from './ana-sayfa';

@NgModule({
  declarations: [
    AnaSayfaPage,
  ],
  imports: [
    IonicPageModule.forChild(AnaSayfaPage),
  ],
})
export class AnaSayfaPageModule {}
