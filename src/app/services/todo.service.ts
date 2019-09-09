import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TODO_JPA_API_URL } from '../app.constants';

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  retreiveAllToDos(username) {
    return this.http.get<Todo[]>(
      `${TODO_JPA_API_URL}/users/${username}/todos`
    );
  }

  // --------------These Methods were used for hello world examples ................///

  showUserName(name: String) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(
      `${TODO_JPA_API_URL}/hello-world/pathVar/${name}`
      //,{headers}
    );;

  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  deleteTodo(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
  }

  export class HelloWorldBean {
    constructor(public message: String) {}
  }

