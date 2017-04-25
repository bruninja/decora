import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'admin' &&
      usuario.senha === '123' || usuario.nome === 'user' &&
        usuario.senha === '123') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  logOut() {
    this.usuarioAutenticado = false;

    this.mostrarMenuEmitter.emit(false);

    this.router.navigate(['/login']);
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
