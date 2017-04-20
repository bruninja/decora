import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user){
    if (confirm("Deseja apagar " + user.name + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert("Não foi possivel apagar o usuário");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}
