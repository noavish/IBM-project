import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/taskModel';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  users: any[];
  tasks: Task[];
  task: Task = new Task();
  constructor( private authService: AuthService, private taskService: TaskService ) { }

  ngOnInit() {
    this.getUsers();
    this.getTasks();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      data => {this.tasks = data; console.log(this.tasks); },
      error => console.log(error)
    );
  }

  markAsDone() {
    console.log(this.task)
    this.task.done = !this.task.done;
    console.log(this.task)
    this.taskService.markDoneInDB(this.task).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
  }
}
