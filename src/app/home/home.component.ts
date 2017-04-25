import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from "../_services/index";
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

=======
  styleUrls: ['./home.component.css'],
  providers: [AuthenticationService]
})
export class HomeComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          // erro
        }
      )
  }
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
}
