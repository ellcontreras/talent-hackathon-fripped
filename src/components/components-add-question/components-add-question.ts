import { Component, ViewChild } from '@angular/core';
import { App } from 'ionic-angular';

// import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the ComponentsAddQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-add-question',
  templateUrl: 'components-add-question.html'
})
export class ComponentsAddQuestionComponent {
  

  constructor(
    // public viewCtrl: ViewController,
      public appCtrl: App
  ) {
  }

  onSubmit(){
    this.appCtrl.getRootNav().goToRoot();
  }
}
