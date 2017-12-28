import { Component } from '@angular/core';

import { TodoListPage } from '../todo-list/todo-list';
import { ConfigurationPage } from '../configuration/configuration';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  todoList = TodoListPage;
  configPage = ConfigurationPage;
}
