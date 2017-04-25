import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class UsuarioDetalheResolver implements Resolve<Usuario> {

    constructor(private usuariosService: UsuariosService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('UsuarioDetalheResolver');

            let id = route.params['id'];

            return this.usuariosService.getUsuario(id);
    }
}
