import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComponentsTestResumeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-test-resume',
  templateUrl: 'components-test-resume.html'
})
export class ComponentsTestResumeComponent {
  @Input('title') title;
  @Input('description') description;
  @Input('good') good;
  @Input('wrong') wrong;

  constructor() {
    // console.log('Hello ComponentsTestResumeComponent Component');
    // this.text = 'Hello World';
  }

}
