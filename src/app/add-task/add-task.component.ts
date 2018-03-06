import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../models/taskModel';
import { TaskService } from '../services/task.service';
import { User } from '../models/userModel';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task();
  creator_id = 1;
  @Input() users: User[];
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter();

  constructor( private taskService: TaskService ) { }

  ngOnInit() {
  }

  addTask() {
    this.task.task_creator_id = this.creator_id;
    this.task.done = false;
    this.taskService.addTaskToDB(this.task).subscribe(
      data => {console.log(data); this.taskAdded.emit(this.task); },
      error => console.log(error)
    );
  }

}
