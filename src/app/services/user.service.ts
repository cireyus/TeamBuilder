import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interface/userInterface';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  team: User[] = [];


  constructor(private http: HttpClient) { }

  public getUser(){

    return this.http.get('https://random-data-api.com/api/users/random_user?size=1');
  }

  getAll(): User[] {

    return this.team;
  }

  create(user:User){

    this.team.push(user);
  }

  delete(id:number): void{

    let index = this.team.findIndex(user => user.id === id);
    this.team.splice(index, 1);
  }
}
