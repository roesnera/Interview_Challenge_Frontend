import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [],
  providers: [TaskService],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  /**
   * This component is for creating a new task and posting it to the backend
   */

  constructor(private taskService: TaskService) { }
}
