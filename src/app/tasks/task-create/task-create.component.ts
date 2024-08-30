import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../task-types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  providers: [TaskService],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  /**
   * This component is for creating a new task and updating the task list with it
   */
  protected task: Task = {
    name: '',
    due: new Date(),
    description: '',
    complete: false
  }

  constructor(private taskService: TaskService) { }

  protected onSubmit(): void {
    console.log(this.task)
    /**
     * Use the task service to update the task list with the new task
     */
    this.task = {
      name: '',
      due: new Date(),
      description: '',
      complete: false
    }
  }
}
