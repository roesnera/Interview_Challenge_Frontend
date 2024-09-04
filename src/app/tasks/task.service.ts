import { Injectable } from '@angular/core';
import { Task, TaskAndId } from '../task-types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5200/api/tasks'
  private tasksSubject = new BehaviorSubject<Array<TaskAndId>>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<TaskAndId>> {
    this.refreshTasks()
    return this.tasks$
  }

  refreshTasks() {
    console.log('refreshing tasks')
    this.http.get<Array<TaskAndId>>(this.apiUrl).subscribe(
      tasks => this.tasksSubject.next(tasks));
  }

  /* This is the only function that you'll need to change in this service */
  updateTask(id: string): void { }

  createTask(newTask: Task): void {
    this.http.post(this.apiUrl, { task: newTask }).subscribe(console.log)
    this.refreshTasks()
  }

  deleteTask(index: string): void {
    this.http.delete(`${this.apiUrl}/${index}`).subscribe(console.log)
    this.refreshTasks()
  }
}
