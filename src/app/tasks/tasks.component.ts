import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/taskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  task: Task;
  constructor( private taskService: TaskService ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      data => {this.tasks = data; console.log(this.tasks); },
      error => console.log(error)
    );
  }

  // markAsDone() {
  //   this.task.done = !this.task.done;
  //   this.taskService.markDoneInDB(this.task).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => console.log(error)
  //   );
  // }
}
