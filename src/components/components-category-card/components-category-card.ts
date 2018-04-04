import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';

import { CategoryPage } from '../../pages/category/category';

/**
 * Generated class for the ComponentsTopicCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-category-card',
  templateUrl: 'components-category-card.html'
})
export class ComponentsCategoryCardComponent {
  @Input('name') name;
  @Input('description') description;

  constructor(
    public appCtrl: App
  ) {
  }

  onClick(nm) {
    this.appCtrl.getRootNav().push(CategoryPage, {
      name: nm
    });
  }

}
