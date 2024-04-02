import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { Observable, filter, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}

  public observable = new Observable((observer) => {
    observer.next('Value 1');
    observer.next('Value 2');
    observer.next('Value 3');
    observer.next('Value 4');
    observer.complete();
  });

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
    // this.todos$.subscribe((x) => console.log(1, x))

    this.observable
      .pipe(
        map((value) => value + 'Test'),
        filter((value) => value.includes('2') || value.includes('4'))
      )
      .subscribe({
        next: (value) => console.log(value),
        error: (error) => console.log(error),
        complete: () => console.log('done'),
      });

    // this.observable.subscribe({
    //   next: (value) => console.log(value),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('done'),
    // });
  }
}
