import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  // Для получения пропа используют input. Также необходимо указать тип входного пропа
  @Input() users: any;
  @Input() isShow: boolean;
  @Input() name: string;

  srcImage = 'https://duckduckgo.com/i/debb01a0d253c221.png'
}
