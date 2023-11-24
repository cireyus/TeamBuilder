import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../interface/userInterface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  user : User|undefined;
  team: User[] | undefined;

    constructor(
      private UserService: UserService
    ) {}

  ngOnInit(): void {

    this.getTeam();
  }

  getTeam(){

    this.team = this.UserService.getAll();
  }


  deleteTeamMember(id: number): void {
    
    this.UserService.delete(id);
  }
}

