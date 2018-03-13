import {ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import { Task } from '../../models/taskModel';
import { TaskService } from '../../services/task.service';
import { User } from '../../models/userModel';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  users: any[];
  task: Task = new Task();
  loading: boolean;
  @Input() user;
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter();

  // get user() {
  //   return this.authService.getUser();
  // }

  constructor( private authService: AuthService, private taskService: TaskService) { }

  ngOnInit() {
    this.loading = true;
    this.getUsers();
  }

  getUsers() {
    this.authService.getAllUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.loading = false
    );
  }

  addTask() {
    this.task.task_creator_id = this.user.user_id;
    if (this.user.level !== 'manager') {
      this.task.assign_to_id = this.user.user_id;
    }
    this.task.done = 0;
    this.taskService.addTaskToDB(this.task).subscribe(
      data => {this.taskAdded.emit(this.task); },
      error => console.log(error),
    );
  }

}
