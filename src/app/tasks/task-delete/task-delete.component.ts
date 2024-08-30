import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css'
})
export class TaskDeleteComponent {
  /**
   * We want to use this component to delete a specific task from the backend based on user input
   */
  protected taskId: number | null = null

  constructor(private taskService: TaskService) { }

  protected onSubmit(): void {
    console.log(this.taskId)
    /**
     * Use the delete method of the task service to delete the selected task from the tasks array
     */
    this.taskId = null
  }
}
