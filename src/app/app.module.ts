import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Plugin
import { IonicStorageModule } from '@ionic/storage';



//Firebase config
import { firebaseConfig } from '../configs/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Providers
import { AuthProvider } from '../providers/auth';
import { FirebaseProvider } from '../providers/firebase';

//Pages
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { NovidadesPageModule } from '../pages/novidades/novidades.module';
import { OfertasPageModule } from '../pages/ofertas/ofertas.module';
import { PedidoPageModule } from '../pages/pedido/pedido.module';
import { MenuMaisPageModule } from '../pages/menu-mais/menu-mais.module';
import { CardapioPageModule } from '../pages/cardapio/cardapio.module';
import { EncomendasPageModule } from '../pages/encomendas/encomendas.module';
import { MinhaContaPageModule } from '../pages/minha-conta/minha-conta.module';
import { CarrinhoCompraPageModule } from '../pages/carrinho-compra/carrinho-compra.module';
import { HistPedidoPageModule } from '../pages/hist-pedido/hist-pedido.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { ContatosPageModule } from '../pages/contatos/contatos.module';
import { RedeSocialPageModule } from '../pages/rede-social/rede-social.module';


@NgModule({
  declarations: [
    MyApp,
    TabsPage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),

  
         // MENU FOOTER
         InicioPageModule,
         NovidadesPageModule,
         OfertasPageModule,
         PedidoPageModule,
         MenuMaisPageModule,
     
       // MENU LATERAL(SLIDE)
         CardapioPageModule,
         EncomendasPageModule,
         MinhaContaPageModule,
         CarrinhoCompraPageModule,
         HistPedidoPageModule,
         SobrePageModule,
         ContatosPageModule,
         RedeSocialPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    AuthProvider,
    FirebaseProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
