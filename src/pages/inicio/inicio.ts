import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild('mySlider') mySlider: any;

  elenco =  [
    {
      "img": "./assets/imgs/pag_inicio_EDITADO.png",
      "TagProduto": "TAG: PROMOÇÃO",
      "nomeProduto": "Brownie",
      "valor": "R$ 10,00",
      "gramas": "50 Gr"
    },
    {
      "img": "../assets/imgs/pag_inicio_promo.jpg",
      "TagProduto": "TAG: PROMOÇÃO",
      "nomeProduto": "Brownie Temático",
      "valor": "R$ 15,00",
      "gramas": "40 Gr"
    },
    {
      "img": "./assets/imgs/brownie_pote_net.png",
      "TagProduto": "TAG: MAIS PEDIDOS",
      "nomeProduto": "Brownie de Pote",
      "valor": "R$ 28,00",
      "gramas": "250 Gr"   
    },
    {
      "img": "./assets/imgs/brownie_damasco1.png",
      "TagProduto": "TAG: NOVIDADES",
      "nomeProduto": "Brownie de Damasco",
      "valor": "R$ 12,00",
      "gramas": "80 Gr"   
    }
  ]

  slideNext(){
    this.mySlider.slideNext();
  }
  slidePrev(){
    this.mySlider.slidePrev();
  }
  
 // ionViewDidLoad() {
 //   console.log('ionViewDidLoad InicioPage');
 // }

}
