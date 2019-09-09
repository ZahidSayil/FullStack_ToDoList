import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  message = "Some Welcome Message";
  welcomeMessageFromService: string;
  name = "";

  constructor(
    private toDoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
        this.name = this.route.snapshot.params["name"];

  }

    getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    
    this.toDoService.showUserName(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
}

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}