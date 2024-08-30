import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../task-types';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-display.component.html',
  styleUrl: './task-display.component.css'
})
export class TaskDisplayComponent {
  /**
   * In this component, we want to display tasks retrieved from the backend
   */
  protected tasks$: Observable<Array<Task>>;


  constructor(private taskService: TaskService) {
    /**
      * You'll need to initialize the tasks$ property using the task service's data
      */
    this.tasks$ = of([{
        name: 'Example task 1',
        due: new Date(Date.now() + 3600),
        description: 'An example task defined in the Task Display Component',
        complete: false
      }])
  }
}
