import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistPedidoPage } from './hist-pedido';

@NgModule({
  declarations: [
    HistPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(HistPedidoPage),
  ],
})
export class HistPedidoPageModule {}
