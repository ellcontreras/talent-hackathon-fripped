import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-resume',
  templateUrl: 'test-resume.html',
})
export class TestResumePage {

  // public respuestas;
  public preguntas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.respuestas = this.navParams.get('respuestas');
    this.preguntas = this.navParams.get('preguntas');

    console.log(`Las preguntas son: `, this.preguntas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestResumePage');
  }

}
