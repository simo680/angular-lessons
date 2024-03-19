import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

interface UserItem {
  id: number
  name: string
  age: number
  isJob?: boolean
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  public users: UserItem[] = [
    { id: 1, name: 'Alex', age: 18 },
    { id: 2, name: 'Steven', age: 19 },
    { id: 3, name: 'Dima', age: 17 },
    { id: 4, name: 'Neena', age: 15 },
  ];
}
