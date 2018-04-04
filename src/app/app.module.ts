import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ComponentsAddQuestionComponent } from '../components/components-add-question/components-add-question';
import { ComponentsModule } from '../components/components.module';

import { TestsPage } from '../pages/tests/tests';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoryPage } from '../pages/category/category';
import { MateriaPage } from '../pages/materia/materia';
import { TestPage } from '../pages/test/test';
import { TestResumePage } from '../pages/test-resume/test-resume';
import { PreguntaViewPage } from '../pages/pregunta-view/pregunta-view';

@NgModule({
  declarations: [
    MyApp,
    TestsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    CategoryPage,
    MateriaPage,
    TestPage,
    TestResumePage,
    PreguntaViewPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TestsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ComponentsAddQuestionComponent,
    CategoryPage,
    MateriaPage,
    TestPage,
    TestResumePage,
    PreguntaViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
