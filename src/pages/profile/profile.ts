import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  tests = [
    {title: 'Examen de fisica', description: 'Prueba de habilidades generales en la materia', good: 3, wrong: 12},
    {title: 'Examen de biologia', description: 'Conceptos básicos de la materia', good: 4, wrong: 5},
    {title: 'Algebra', description: 'Problemas considerados un reto de algebra', good: 15, wrong: 5}
  ];

  constructor(public navCtrl: NavController) {

  }

}
