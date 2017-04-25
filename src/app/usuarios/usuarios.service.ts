import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuariosService {

  private usuarios: Usuario[] = [
    {id: 1, nome: 'Usuario 01', email: 'usuario01@email.com'},
    {id: 2, nome: 'Usuario 02', email: 'usuario02@email.com'},
    {id: 3, nome: 'Usuario 03', email: 'usuario03@email.com'}
  ];

  getUsuarios(){
    return this.usuarios;
  }

  getUsuario(id: number){
    for (let i=0; i<this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if (usuario.id == id){
        return usuario;
      }
    }
    return null;
  }

  constructor() { }

}
