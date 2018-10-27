import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncomendasPage } from './encomendas';

@NgModule({
  declarations: [
    EncomendasPage,
  ],
  imports: [
    IonicPageModule.forChild(EncomendasPage),
  ],
})
export class EncomendasPageModule {}
