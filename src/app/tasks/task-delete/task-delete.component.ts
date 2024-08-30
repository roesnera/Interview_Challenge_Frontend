import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-delete',
  standalone: true,
  imports: [],
  providers: [TaskService],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css'
})
export class TaskDeleteComponent {
  /**
   * We want to use this component to delete a specific task from the backend based on user input
   */

  constructor(private taskService: TaskService) { }

}
