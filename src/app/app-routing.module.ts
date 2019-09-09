import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import { RouteGuardService } from './services/route-guard.service';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "welcome/:name",
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "todos",
    component: ListToDosComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "todos/:id",
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "**",
    component: ErrorComponent
    // canActivate:[RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
