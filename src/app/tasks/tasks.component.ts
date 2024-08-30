import { Component } from '@angular/core';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDisplayComponent } from './task-display/task-display.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskCreateComponent, TaskDeleteComponent, TaskDisplayComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
