import { UsuarioDetalheResolver } from './guards/usuario-detalhe.resolver';
import { UsuariosDeactivateGuard } from './../guards/usuarios-deactivate.guard';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UsuariosRoutingModule
    ],
    exports: [],
    declarations: [
        UsuariosComponent,
        UsuarioFormComponent,
        UsuarioDetalheComponent
    ],
    providers: [
        UsuariosService,
        UsuariosDeactivateGuard,
        UsuarioDetalheResolver
    ],
})
export class UsuariosModule { }
