import { Injectable } from '@angular/core';
import { Task } from '../task-types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Array<Task>>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.tasks$;
  }

  createTask(newTask: Task): void {
    const currentTasks = this.tasksSubject.getValue();
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  deleteTask(index: number): void {
    const currentTasks = this.tasksSubject.getValue();
    currentTasks.splice(index, 1);
    this.tasksSubject.next([...currentTasks]);
  }
}
