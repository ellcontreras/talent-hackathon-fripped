import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreguntaViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregunta-view',
  templateUrl: 'pregunta-view.html',
})
export class PreguntaViewPage {

  public name;
  public description;
  public category;
  public user;

  respuestas = [
    {user: 'userna1234', content: 'Se resuelve de la siguiente manera men'},
    {user: 'alebri0910', content: 'Puedes intentar de esta forma'},
    {user: 'cien1230', content: 'Debes de calcular de la siguiente manera'} 
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('pregunta').name;
    this.description = this.navParams.get('pregunta').description;
    this.category = this.navParams.get('pregunta').category;
    this.user = this.navParams.get('pregunta').user;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaViewPage');
  }

}
