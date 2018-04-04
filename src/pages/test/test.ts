import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestResumePage } from '../test-resume/test-resume';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  index = 0;
  id: String;
  respuesta: String;
  correcta: Boolean;
  respuestas = [];

  preguntas = [
    {
      titulo: 'Cuanto es 2 + 2?',
      respuestas: [
        {contenido: '4', correcta: true},
        {contenido: '0', correcta: false},
        {contenido: '5', correcta: false}
      ]
    },
    {
      titulo: 'Cuanto es 2 + 3?',
      respuestas: [
        {contenido: '4', correcta: false},
        {contenido: '0', correcta: false},
        {contenido: '5', correcta: true}
      ]
    },
    {
      titulo: 'Cuanto es 3 + 3?',
      respuestas: [
        {contenido: '6', correcta: true},
        {contenido: '0', correcta: false},
        {contenido: '5', correcta: false}
      ]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  onClick(){
    // if(this.preguntas[this.index].respuestas[0].contenido == this.respuesta){
    //   this.correcta = true;
    // }

    // if(this.preguntas[this.index].respuestas[1].contenido == this.respuesta){
    //   this.correcta = true;
    // }

    // if(this.preguntas[this.index].respuestas[2].contenido == this.respuesta){
    //   this.correcta = true;
    // }

    if(this.preguntas[this.index].respuestas[this.index].contenido == this.respuesta){
      this.correcta = true;
    } else {
      this.correcta = false;
    }

    this.respuestas.push({
      index: this.index,
      correcta: this.correcta
    });

    this.preguntas[this.index].respuestas = this.respuestas;

    if(this.index == this.preguntas.length - 1){
      this.navCtrl.push(TestResumePage, {
        // respuestas: this.respuestas,
        preguntas: this.preguntas
      });
    } else {
      this.index += 1;
    }

    console.log(`Respuesta: ${this.respuesta}, correcta: ${this.correcta}`);
  }

}
