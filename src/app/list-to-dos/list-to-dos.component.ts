import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-list-to-dos",
  templateUrl: "./list-to-dos.component.html",
  styleUrls: ["./list-to-dos.component.css"]
})
export class ListToDosComponent implements OnInit {
  todos: Todo[];
  message: String;
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.refershToDos();
  }

  refershToDos() {
    this.todoService.retreiveAllToDos("zahid").subscribe(res => {
      console.log(res);
      this.todos = res;
    });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo("zahid ", id).subscribe(response => {
      this.message = `Deleted toDo ${id} Successfully`;
      this.refershToDos();
    });
  }

  updateTodo(id) {
    this.router.navigate(["todos", id]);
  }

  addTodo(){
    this.router.navigate(["todos", -1]);
  }
}


//eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU2ODY1MjEzNywiaWF0IjoxNTY4MDQ3MzM3fQ.WIFu6O30nKJMcj92SdXxJ7DYkB3IT1y5_ffuGRofbR0PY8ufHzFMs-B7K3CeiiKRbqs7w5ZjWx_GQNEalvrUqg