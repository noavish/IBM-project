import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/taskModel';


@Injectable()
export class TaskService {

  constructor( private http: HttpClient ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks');
  }

  addTaskToDB(task: Task): Observable<Task> {
    return this.http.post<Task>('api/addTask', task);
  }

  markDoneInDB(task: Task): Observable <Task> {
    return this.http.put<Task>(`/api/${task.task_id}`, task);
  }
}
