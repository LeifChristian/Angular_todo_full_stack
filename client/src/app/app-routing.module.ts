import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
const routes: Routes = [
{path: '', redirectTo: 'list', pathMatch: 'full'},
{path: 'list', component: TodoListComponent},
{path: 'add', component: TodoAddComponent},
{path: 'edit/:id', component: TodoEditComponent},
{path: 'details/:id', component: TodoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
