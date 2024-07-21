import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from "rxjs";

import { Task } from 'src/app/Task';
import { UiService } from "../../services/ui.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter();

  task: string = '';
  dateTime: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => this.showAddTask = value
    );
  }

  onSubmit() {
    if (!this.task) {
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.task,
      day: this.dateTime,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.task = '';
    this.dateTime = '';
    this.reminder = false;
  }
}
