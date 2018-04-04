import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestResumePage } from './test-resume';

@NgModule({
  declarations: [
    TestResumePage,
  ],
  imports: [
    IonicPageModule.forChild(TestResumePage),
  ],
})
export class TestResumePageModule {}
