import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoLayoutComponent } from './todo-layout/todo-layout.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [

  // {
  //   // path: 'todo',
  //   // component:TodoLayoutComponent,
 
  //   children: [
 
  //       // {
  //       //   path:'todo-list',
  //       //   component:TodoListComponent
  //       // },
  //       // {
  //       //   path:'add-todo',
  //       //   component:AddTodoComponent
  //       // }
  //     ]

  //   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
