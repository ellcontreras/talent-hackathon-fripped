import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  name: String;

  materias = [
    {nombre: 'Fisica', descripcion: 'Analiza cosas chidas con fisica'},
    {nombre: 'Quimica', descripcion: 'Analiza cosas chidas con quimica'},
    {nombre: 'Biologia', descripcion: 'Analiza cosas chidas con biologia'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    
  }

}
