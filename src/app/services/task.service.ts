import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/taskModel';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';



@Injectable()
export class TaskService {
  user: any;
  private tasks: any;

  constructor( private http: HttpClient, private authService: AuthService ) { }
  httpGetObservable
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks');
  }

  getMyTasks() {
  this.user = this.authService.getUser()
    this.test();
    return this.httpGetObservable
  }

  test() {
    this.httpGetObservable = this.http.get<Task[]>(`api/myTasks/${this.user.user_id}`).map((source) => {this.tasks = source ; return source});
    // console.log(this.httpGetObservable)
  }



  addTaskToDB(task: Task): Observable<Task> {

    console.log(task)
    this.tasks.push(task);
    return this.http.post<Task>('api/addTask', task);
  }

  markDoneInDB(task: Task): Observable <Task> {
    return this.http.put<Task>(`/api/${task.task_id}`, task);
  }
}
