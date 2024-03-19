import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-event-data',
  standalone: true,
  imports: [],
  templateUrl: './event-data.component.html',
  styleUrl: './event-data.component.css',
})
export class EventDataComponent {
  public clickHandle(): void {
    console.log('click!');
  }

  public count: number = 0;

  public increment(): void {
    this.count++;
  }

  public keyHandle(e: any): void {
    // if (e.key === "Enter") {
    //   console.log('Yes!');
    // }
    console.log(Object.getPrototypeOf(e));
    console.log(Object.getPrototypeOf(e));
  };

  public dates: Array<Date> = [
    new Date('2020-04-23'),
    new Date('2022-09-23'),
    new Date('2023-07-23'),
    new Date('2022-05-23'),
    new Date('2022-013-23'),
  ]


    // Задача: циклично отрусуйте каждый эленмнт массива в маркированном списке
  // Дату необходимо преобразовать по формату: '20.04:2020'

  // Над списокм реализуйте кнопку, которая по нажатию будет формировать новый элемент
  // массива с текущем моментом времени
}
