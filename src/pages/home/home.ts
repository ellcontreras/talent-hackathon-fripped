import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComponentsAddQuestionComponent } from '../../components/components-add-question/components-add-question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories = [
    {name: 'Ciencias naturales', description: 'Fisica, Quimica y Biologia estudia acerca de estas materias'},
    {name: 'Ciencias sociales', description: 'Aprende sobre ciencias sociales, español, lectura etc.'},
    {name: 'Artes', description: 'Música, Pintura, Baile, Teatro practica tus conocimientos teoricos'},
    {name: 'Finanzas', description: 'Como calcular de cuanto les toca en la peda, contar borregas etc'}       
  ];

  constructor(public navCtrl: NavController) {
    // this.navCtrl.push()
  }

  addQuestionSubmit(){
    this.navCtrl.push(ComponentsAddQuestionComponent);
  }

}
