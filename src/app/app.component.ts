import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { UserService } from './services/user.service';
import { User } from './interface/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  users : any;
  user : User|undefined;
  team: User[] | undefined;

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
    }


    addTeamMember(user:User){

      this.UserService.create(user);
    }
}
