import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../todo-data.service';
import { ActivatedRoute } from '@angular/router';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;
  id: number;
  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params["id"];
      this.todoDataService.getTodo(this.id).subscribe(t =>(this.todo = t)); 
    });
  }

}
