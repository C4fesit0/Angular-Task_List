import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private TaskService: TaskService) {}

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((task) => {
      this.tasks = task;
    });
  }
  deleteTask(task: Task): void {
    console.log(task);
     this.TaskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    ); 
  }
}
