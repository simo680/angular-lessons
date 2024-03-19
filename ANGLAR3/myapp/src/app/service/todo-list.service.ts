import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number
  title: string
  completed: boolean
}

const startTodos: TodoItem[] = [
  {id: 1, title: 'Помыть руки', completed: true},
  {id: 2, title: 'Сделать зарядку', completed: false},
  {id: 3, title: 'Наконец изучить React', completed: true}
]

@Injectable({
  providedIn: 'root'
}) export class TodoListService {
  public todos: TodoItem[] = startTodos
}
