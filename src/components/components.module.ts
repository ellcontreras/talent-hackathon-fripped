import { NgModule } from '@angular/core';
import { ComponentsCategoryCardComponent } from './components-category-card/components-category-card';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsTestResumeComponent } from './components-test-resume/components-test-resume';
import { ComponentsAddQuestionComponent } from './components-add-question/components-add-question';
import { ComponentsTopicCardComponent } from './components-topic-card/components-topic-card';
import { ComponentsMateriaCardComponent } from './components-materia-card/components-materia-card';

@NgModule({
	declarations: [ComponentsCategoryCardComponent,
    ComponentsTestResumeComponent,
    ComponentsAddQuestionComponent,
    ComponentsTopicCardComponent,
    ComponentsMateriaCardComponent],
	imports: [
		IonicModule.forRoot(this)
	],
	exports: [ComponentsCategoryCardComponent,
    ComponentsTestResumeComponent,
    ComponentsAddQuestionComponent,
    ComponentsTopicCardComponent,
    ComponentsMateriaCardComponent],
})
export class ComponentsModule {}
