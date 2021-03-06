import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  tasksList: Array<string> = [];
  doneTasksList: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);

  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    console.log(this.tasksList);
  }

  done(task: string) {
    this.doneTasksList.push(task);
    this.remove(task);

  }
}
