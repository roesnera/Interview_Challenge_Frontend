// No need to change this file
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-delete.component.html',
})
export class TaskDeleteComponent {
  /**
   * We want to use this component to delete a specific task from the backend based on user input
   */
  protected taskId: string = ''

  constructor(private taskService: TaskService) { }

  protected onSubmit(): void {
    /**
     * Use the delete method of the task service to delete the selected task from the tasks array
     */
    this.taskService.deleteTask(this.taskId)
    this.taskId = ''
  }
}
