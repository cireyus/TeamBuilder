import { Component, OnInit } from '@angular/core';


import { UserService } from '../../services/user.service';
import { User } from '../../interface/userInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {

  users : any;
  user : User|undefined;
  team: User[] = this.UserService.team;
  message:string = '';

  constructor(
    private UserService: UserService
  ) {}
  
  ngOnInit() {

    this.getRobot();
    this.getTeam();
  }

  getRobot(){

    this.UserService.getUser().subscribe((data)=>{
      this.users = data;
    });
  }

  getTeam(){
    
    this.team = this.UserService.getAll();
    this.displayMessage();
  }

  addTeamMember(user:User){

    if(this.UserService.team.length < 6){

      this.UserService.create(user);
    }
    this.displayMessage();
  }

  deleteTeamMember(id: number): void {
  
    this.UserService.delete(id);
    this.displayMessage();
  }  

  displayMessage(){

    if(this.UserService.team.length < 6){

      this.message = '';
    }
    else{

      this.message = 'Stop ! 6 members Max';
    }
  }
}
