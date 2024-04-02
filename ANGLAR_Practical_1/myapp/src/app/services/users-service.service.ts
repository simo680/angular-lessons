import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(){}
  public users: any[] = []

  public fetchUserData() :void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.users = data
      })
  }

  public search(name: string): any[] {
   return this.users.filter(el => el.name.includes(name) )
  }

  // public filterDomain(email: string): any[] {
  //   // return this.users.map()
  // }

}

