import { Component } from '@angular/core';

import { Task } from "../../Task";
import { TASKS } from "../../mock-tasks";

import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  taskService: TaskService = new TaskService();

  constructor() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
