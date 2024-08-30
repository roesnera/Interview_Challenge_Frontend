import { Component, OnInit } from '@angular/core';
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
export class TaskDisplayComponent implements OnInit {
  /**
   * In this component, we want to display tasks retrieved from the backend
   */

  protected tasks!: Array<Task>

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    /**
     * On initialization, retreive the tasks from the service
     * we will use this retreived value to display the tasks in our html template
     */
    this.tasks = []
  }
}
