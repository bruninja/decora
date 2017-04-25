import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsuarioFormComponent } from './../usuarios/usuario-form/usuario-form.component';

@Injectable()
export class UsuariosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');

            //return component.podeMudarRota ? component.podeMudarRota() : true;

            return component.podeDesativar ? component.podeDesativar() : true;
    }
}
