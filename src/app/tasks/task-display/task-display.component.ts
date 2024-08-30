import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../task-types';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [],
  providers: [TaskService],
  templateUrl: './task-display.component.html',
  styleUrl: './task-display.component.css'
})
export class TaskDisplayComponent {
  /**
   * In this component, we want to display tasks retrieved from the backend
   * As part of step 1, you will need to change the tasks property to store an Observable of an array of Tasks
   * and then initialize that observable using the TaskService
   */

  protected tasks: Array<Task> = [
      {
        name: 'Example task 1',
        due: new Date(Date.now() + 3600),
        description: 'An example task defined in the Task Display Component',
        complete: false
      }
    ]

  constructor(private taskService: TaskService) { }
}
