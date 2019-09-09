import { Component, OnInit } from "@angular/core";
import { TodoService, Todo } from "../services/todo.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    //default todo
    this.todo = new Todo(this.id, "", false, new Date());

    //getting from server
    if (this.id != -1) {
      this.todoService
        .retrieveTodo("zahid", this.id)
        .subscribe(data => (this.todo = data));
    }
  }

  saveTodo() {
    if (this.id ==- 1) {
      //=== ==
      this.todoService.createTodo("zahid", this.todo).subscribe(data => {
        console.log(data);
        this.router.navigate(["todos"]);
      });
    } else {
      this.todoService
        .updateTodo("zahid", this.id, this.todo)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["todos"]);
        });
    }
  }
}
