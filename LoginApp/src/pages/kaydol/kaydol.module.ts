import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaydolPage } from './kaydol';

@NgModule({
  declarations: [
    KaydolPage,
  ],
  imports: [
    IonicPageModule.forChild(KaydolPage),
  ],
})
export class KaydolPageModule {}
