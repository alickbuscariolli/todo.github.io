import { Activity } from '../models/activity';

export class ActivitiesService {
  private activities: Activity[] = [];
  private veryImportantList: any [] = [];
  private importantList: any [] = [];
  private notImportantList: any [] = [];

  addActivity(name: string, description: string, level: string){
    if (level == 'Very Important') {
      this.veryImportantList.push(new Activity(name, description, level));
    } else if (level == 'Important') {
      this.importantList.push(new Activity(name, description, level));
    } else if (level == 'Not Important') {
      this.notImportantList.push(new Activity(name, description, level));
    }
    //this.activities.push(new Activity(name, description, level));
  }

  getVeryImpList(){
    return this.veryImportantList.slice();
  }

  getImpList(){
    return this.importantList.slice();
  }

  getNotImpList(){
    return this.notImportantList.slice();
  }

  // getActivity(){
  //   return this.activities.slice();
  // }

  updateActivity(index: number,
                 name: string,
                 description: string,
                 level: string){
    this.activities[index] = new Activity(name, description, level);
  }

  removeVeryImpActivity(index: number){
    this.veryImportantList.splice(index, 1);
  }

  removeImpActivity(index: number){
    this.importantList.splice(index, 1);
  }

  removeNotImpActivity(index: number){
    this.notImportantList.splice(index, 1);
  }
}
