import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreguntaViewPage } from '../pregunta-view/pregunta-view';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  tests = [
    {
      name: '¿Cuál es la diferencia entre una bacteria y un virus?',
      description: 'Hola que tal me pueden ayudar a blah blah blah',
      category: 'Ciencias Naturales',
      user: {
        name: 'osares10'
      }
    },
    {
      name: '¿Como se deriva una función?',
      description: 'Me pueden ayudar a derivar una función?',
      category: 'Matematicas',
      user: {
        name: 'luisguerra495'
      }
    },
    {
      name: '¿Pueden factorizarme esta ecuación?',
      description: 'Necesito auda para factorizar una ecuación',
      category: 'Matematicas',
      user: {
        name: 'elverg123'
      }
    },
    {
      name: '¿Cómo resolver un problmea de MRU que tenga diferencia de tiempos?',
      description: 'Me dejaron de tarea esto y no le entiendo',
      category: 'Ciencias Naturales',
      user: {
        name: 'cristo1223'
      }
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  onClick(pregunta){
    this.navCtrl.push(PreguntaViewPage, {
      pregunta: pregunta
    });
  }
}
