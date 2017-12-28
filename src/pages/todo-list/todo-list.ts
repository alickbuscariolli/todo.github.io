import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddEditActivityPage } from '../add-edit-activity/add-edit-activity';
import { Activity } from '../../models/activity';
import { ActivitiesService } from '../../services/activities';

@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {

  activities: Activity[];
  levelColor: string;
  veryImportantList: Activity[];
  importantList: Activity[];
  notImportantList: Activity[];
  veryImpArray: boolean = false;
  impArray: boolean = false;
  notImpArray: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private activitiesService: ActivitiesService) {
  }

  ionViewWillEnter(){
    this.veryImportantList = this.activitiesService.getVeryImpList();
    this.importantList = this.activitiesService.getImpList();
    this.notImportantList = this.activitiesService.getNotImpList();
    this.checkAllArrays();
  }

  checkAllArrays(){
    this.checkVeryImpArray(this.veryImportantList);
    this.checkImpArray(this.importantList);
    this.checkNotImpArray(this.notImportantList);
  }

  checkVeryImpArray(array: any){
    if (array.length > 0) {
      this.veryImpArray = true;
    } else {
      this.veryImpArray = false;
    }
  }

  checkImpArray(array: any){
    if (array.length > 0) {
      this.impArray = true;
    } else {
      this.impArray = false;
    }
  }

  checkNotImpArray(array: any){
    if (array.length > 0) {
      this.notImpArray = true;
    } else {
      this.notImpArray = false;
    }
  }

  onNewActivity(){
    this.navCtrl.push(AddEditActivityPage, {mode: 'Add'});
  }

  onDeleteActivity(array: any, index: number){
    array.splice(index, 1);

    if (array == this.veryImportantList && array.length == 0) {
      this.activitiesService.removeVeryImpActivity(index);
      if (array.length == 0) {
        this.veryImpArray = false;
      }
    } else if (array == this.importantList) {
      this.activitiesService.removeImpActivity(index);
      if (array.length == 0){
        this.impArray = false;
      }
    } else if (array == this.notImportantList) {
      this.activitiesService.removeNotImpActivity(index);
      if (array.length == 0){
        this.notImpArray = false;
      }
    }
  }

}
