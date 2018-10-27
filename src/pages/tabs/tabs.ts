import { Component } from '@angular/core';
import { InicioPage } from '../inicio/inicio';
import { NovidadesPage } from '../novidades/novidades';
import { OfertasPage } from '../ofertas/ofertas';
import { PedidoPage } from '../pedido/pedido';
import { MenuMaisPage } from '../menu-mais/menu-mais';
import { CardapioPage } from '../cardapio/cardapio';
import { EncomendasPage } from '../encomendas/encomendas';
import { MinhaContaPage } from '../minha-conta/minha-conta';
import { CarrinhoCompraPage } from '../carrinho-compra/carrinho-compra';
import { HistPedidoPage } from '../hist-pedido/hist-pedido';
import { SobrePage } from '../sobre/sobre';
import { ContatosPage } from '../contatos/contatos';
import { RedeSocialPage } from '../rede-social/rede-social';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//MENU FOOTER
tab1Root = InicioPage;
tab2Root = NovidadesPage; 
tab3Root = OfertasPage; 
tab4Root = PedidoPage;
tab5Root = MenuMaisPage; 

// MENU LATERAL(SLIDE)
tab6Root = CardapioPage; 
tab7Root = EncomendasPage; 
tab8Root = MinhaContaPage; 
tab9Root = CarrinhoCompraPage; 
tab10Root = HistPedidoPage; 
tab11Root = SobrePage; 
tab12Root = ContatosPage; 
tab13Root = RedeSocialPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
