import { Injectable } from '@angular/core';
import { Task } from '../task-types';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Array<Task> = []

  /**
  * This http field is what we will use to make crud requests to the backend
  * with methods like 'this.http.get([some url])'
  *
  * Currently, we are not connected to the backend at all and are using only the local,
  * in-memory tasks array.
  */
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return of(this.tasks)
  }

  createTask(newTask: Task): void {
    this.tasks.push(newTask)
  }

  deleteTask(index: number): void {
    this.tasks.splice(index)
  }
}
