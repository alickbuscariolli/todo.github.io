import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { AddEditActivityPage } from '../pages/add-edit-activity/add-edit-activity';
import { ActivitiesService } from '../services/activities';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TodoListPage,
    ConfigurationPage,
    AddEditActivityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TodoListPage,
    ConfigurationPage,
    AddEditActivityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActivitiesService
  ]
})
export class AppModule {}
