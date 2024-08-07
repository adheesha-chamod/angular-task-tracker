import { Component } from '@angular/core';

import { Task } from "../../Task";

import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] | undefined;


  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks?.push(task);
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks?.filter(t => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
