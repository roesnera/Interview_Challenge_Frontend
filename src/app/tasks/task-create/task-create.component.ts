import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../task-types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  protected task: Task = {
    name: '',
    due: new Date(),
    description: '',
    complete: false
  };

  constructor(private taskService: TaskService) { }

  protected onSubmit(): void {
    console.log(this.task);
    /**
      * Here you will need to use the Task Service method to update the tasks observable
      */
    this.task = {
      name: '',
      due: new Date(),
      description: '',
      complete: false
    };
  }
}
