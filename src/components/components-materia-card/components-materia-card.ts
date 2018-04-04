import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';

import { MateriaPage } from '../../pages/materia/materia';

/**
 * Generated class for the ComponentsMateriaCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-materia-card',
  templateUrl: 'components-materia-card.html'
})
export class ComponentsMateriaCardComponent {
  @Input('name') name;
  @Input('description') description;

  constructor(public app: App) {

  }

  onClick(name){
    this.app.getRootNav().push(MateriaPage, {
      name: name
    });
  }

}
