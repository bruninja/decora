import { UsuariosDeactivateGuard } from './../guards/usuarios-deactivate.guard';
import { UsuariosGuard } from './../guards/usuarios.guard';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuariosComponent } from './usuarios.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioDetalheResolver } from './guards/usuario-detalhe.resolver';

const usuariosRoutes = [
    {path: '', component: UsuariosComponent,
     canActivateChild: [UsuariosGuard],
     children : [
        {path: 'novo', component: UsuarioFormComponent},
        {path: ':id', component: UsuarioDetalheComponent,
            resolve: { usuario : UsuarioDetalheResolver }
        },
        {path: ':id/editar', component: UsuarioFormComponent,
            canDeactivate: [UsuariosDeactivateGuard]
        }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule {}
