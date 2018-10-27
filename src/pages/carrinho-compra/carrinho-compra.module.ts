import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoCompraPage } from './carrinho-compra';

@NgModule({
  declarations: [
    CarrinhoCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(CarrinhoCompraPage),
  ],
})
export class CarrinhoCompraPageModule {}
