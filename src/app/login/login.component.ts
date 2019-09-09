import { Component, OnInit } from "@angular/core";
import { HardcodedAuthenticationService } from "../services/hardcoded-authentication.service";
import { Router } from "@angular/router";
import { BasicAuthenticationService } from "../services/basic-authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "in28minutes";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleJwtAuthLogin() {
          this.basicAuthenticationService
            .executeJWTAuthenticationService(this.username, this.password)
            .subscribe(
              data => {
                console.log(data);
                this.router.navigate(["welcome", this.username]);
                this.invalidLogin = false;
              },
              error => {
                console.log(error);
                this.invalidLogin = true;
              }
            );

  }
  handleBasicAuthLogin() {
    // if(this.username==="in28minutes" && this.password === 'dummy') {

        this.basicAuthenticationService.executeAuthenticationService(
        this.username,
        this.password).subscribe(
          data=> {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidLogin = false;
        },
          error => {
          console.log(error);
          this.invalidLogin = true;
        })
  }

  
  handleLogin() {
    // if(this.username==="in28minutes" && this.password === 'dummy') {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      //Redirect to Welcome Page
      this.router.navigate(["welcome", this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
