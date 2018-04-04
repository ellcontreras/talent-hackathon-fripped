import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { TestPage } from '../../pages/test/test';

/**
 * Generated class for the ComponentsTopicCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-topic-card',
  templateUrl: 'components-topic-card.html'
})
export class ComponentsTopicCardComponent {
  @Input('name') name;
  @Input('description') description;

  constructor(private app: App) {
    
  }

  onClick(id){
    this.app.getRootNav().push(TestPage, {
      id: id
    });
  }

}
