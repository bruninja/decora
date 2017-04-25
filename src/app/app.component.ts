<<<<<<< HEAD
import { AuthService } from './login/auth.service';
=======
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
<<<<<<< HEAD

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
=======
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
}
