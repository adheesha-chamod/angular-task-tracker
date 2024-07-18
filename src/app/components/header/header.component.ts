import { Component } from '@angular/core';
import { Subscription } from "rxjs";

import { UiService } from "../../services/ui.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = "Task Tacker";
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value) => this.showAddTask = value
    );
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
