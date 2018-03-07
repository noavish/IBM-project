import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Task } from '../models/taskModel';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges, OnInit {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.task, changes);
  }
  @Input() task: Task = new Task();

  constructor( private taskService: TaskService ) { }

  ngOnInit() {
    console.log(this.task);
  }

  markAsDone() {
    console.log('clicked', this.task.task_id);
    if (this.task.done == 0) {
      this.task.done = 1;
    } else {
      this.task.done = 0;
    }
    console.log('1', this.task);
    this.taskService.markDoneInDB(this.task).subscribe(
      data => {
        console.log('2', data);
      },
      error => console.log(error)
    );
  }
}
