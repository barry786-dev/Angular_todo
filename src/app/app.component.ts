import { Component } from '@angular/core';


import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'firstAngularApp project';
  todoValue!: string;
  list: Todo[] = [];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }
  // inputChangeHandler(event: any) {
  //   this.todoValue = event.target.value;
  // }
  addItem() {
    console.log(this.todoValue);

    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
    console.log(this.list);
  }

  // toggleEditable(e: any, id: number) {
  //   if (e.target.checked) {
  //     this.list = this.list.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           isDone: true,
  //         };
  //       }
  //       return item;
  //     });
  //   } else {
  //     this.list = this.list.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           isDone: false,
  //         };
  //       }
  //       return item;
  //     });
  //   }
  //   console.log(this.list);
    
  // }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
