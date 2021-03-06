import {Component, Input, OnInit} from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/taskModel';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  myTasks: Task[];
  public user: any;
  constructor( private taskService: TaskService, private authService: AuthService ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.authService.getCurrentUser().subscribe(data => {
      this.user = data.user;
    },
      (err) => {console.log(err); },
      () => {this.getTasks(); }
      );
  }

  getTasks() {
      if (this.user.level === 'manager') {

    this.taskService.getTasks().subscribe(
      data => {
        this.tasks = data;
        console.log(this.tasks);
      },
      error => console.log(error)
    );
  } else {
      this.getMyTasks();
    }
    }

  getMyTasks() {
    this.taskService.getMyTasks(this.user.user_id).subscribe(
      data => {
        this.myTasks = data;
      },
      error => console.log(error)
    );
  }

  }
