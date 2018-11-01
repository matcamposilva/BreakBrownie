import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { EncomendasPage } from '../encomendas/encomendas';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { CarrinhoCompraPage } from '../carrinho-compra/carrinho-compra';
import { HistPedidoPage } from '../hist-pedido/hist-pedido';
import { SobrePage } from '../sobre/sobre';
import { ContatosPage } from '../contatos/contatos';
import { RedeSocialPage } from '../rede-social/rede-social';
import { CardapioPageModule } from '../cardapio/cardapio.module';

/**
 * Generated class for the MenuMaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-mais',
  templateUrl: 'menu-mais.html',
})
export class MenuMaisPage {
  rootPage = InicioPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuMaisPage');
  }

  abrirCardapio(){
    this.navCtrl.push(CardapioPageModule);
  }

  abrirEncomendas(){
    this.navCtrl.push(EncomendasPage);
  }
  abrirMinhaConta(){
    this.navCtrl.push(MinhaContaPage);
  }
  
   abrirCarrinhoCompra(){
    this.navCtrl.push(CarrinhoCompraPage);
  }
  
  abrirHistPedido(){
    this.navCtrl.push(HistPedidoPage);
  }
  
   abrirSobre(){
    this.navCtrl.push(SobrePage);
  }
  
   abrirContatos(){
    this.navCtrl.push(ContatosPage);
  }
  
   abrirRedeSocial(){
    this.navCtrl.push(RedeSocialPage);
  }

}

