import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {
  name: String;

  temas = [
    {name: 'Suma', description: 'Estudia lo basico de las sumasy las restas que tenemos aqui'},
    {name: 'Multiplicación', description: 'Estudia lo de primaria wey de multiplicacion'},
    {name: 'Resta', description: 'Estudia lo de primaria wey de resta'},
    {name: 'Division', description: 'Estudia lo de primaria wey de division'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }

}
