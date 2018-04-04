import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntaViewPage } from './pregunta-view';

@NgModule({
  declarations: [
    PreguntaViewPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntaViewPage),
  ],
})
export class PreguntaViewPageModule {}
