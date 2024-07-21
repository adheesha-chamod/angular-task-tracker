import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from "../../Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task | any;
  @Output() onDeleteTask = new EventEmitter<Task>
  @Output() onToggleReminder = new EventEmitter<Task>();

  faTimes = faTimes;


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
