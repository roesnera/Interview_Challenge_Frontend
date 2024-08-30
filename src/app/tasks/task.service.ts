import { Injectable } from '@angular/core';
import { Task } from '../task-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Array<Task> = []

  constructor(private http: HttpClient) { }

  getTasks(): Array<Task> {
    return this.tasks
  }

  createTask(newTask: Task): void {
    this.tasks.push(newTask)
  }

  deleteTask(index: number): void {
    this.tasks.splice(index)
  }
}
