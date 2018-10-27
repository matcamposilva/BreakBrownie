import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovidadesPage } from './novidades';

@NgModule({
  declarations: [
    NovidadesPage,
  ],
  imports: [
    IonicPageModule.forChild(NovidadesPage),
  ],
})
export class NovidadesPageModule {}
