import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEditActivityPage } from './add-edit-activity';

@NgModule({
  declarations: [
    AddEditActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEditActivityPage),
  ],
})
export class AddEditActivityPageModule {}
