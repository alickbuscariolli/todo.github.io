import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivitiesService } from '../../services/activities';
import { Activity } from '../../models/activity';

@Component({
  selector: 'page-add-edit-activity',
  templateUrl: 'add-edit-activity.html',
})

export class AddEditActivityPage implements OnInit {
  mode = 'New';
  levelOptions = ['Very Important', 'Important', 'Not Important'];
  activity: Activity;
  activityForm: FormGroup;
  index: number;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private activitiesService: ActivitiesService) {}

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit'){
      this.activity = this.navParams.get('activity');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  onSubmit(){
    const value = this.activityForm.value;
    if (this.mode == 'Edit'){
      this.activitiesService.updateActivity(this.index, value.name, value.description, value.level);
    } else {
      this.activitiesService.addActivity(value.name, value.description, value.level);
    }
    this.activityForm.reset();
    this.navCtrl.popToRoot;
  }

  private initializeForm() {
    let name = null;
    let description = null;
    let level = 'Important';

    if (this.mode == 'Edit'){
      name = this.activity.name;
      description = this.activity.description;
      level = this.activity.level;
    }

    this.activityForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'level': new FormControl(level, Validators.required)
    });
  }

}
