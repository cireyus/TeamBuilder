import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './component/user/user.component';
import { TeamComponent } from './component/team/team.component';

const routes: Routes = [
  { path:"user", component:UserComponent },
  { path:"team", component:TeamComponent },
  { path: "", redirectTo:"/user", pathMatch:"full" },
  { path:"**", redirectTo:"/user" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
