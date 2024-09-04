// No need to change this file
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskAndId } from '../../task-types';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-display.component.html',
})
export class TaskDisplayComponent {
  /**
   * In this component, we want to display tasks retrieved from the backend
   */
  protected tasks$: Observable<Array<TaskAndId>>;


  constructor(private taskService: TaskService) {
    /**
      * You'll need to update the tasks$ property using the task service's data
      * the below is just an default initialization
      */
    this.tasks$ = this.taskService.getTasks()
  }
}
