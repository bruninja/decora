import { UsuariosModule } from './../usuarios.module';
import { UsuariosService } from './../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.usuario = this.usuariosService.getUsuario(id);
      }
    );*/

    console.log('ngOnInit: UsuarioDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: {usuario: Usuario}) => {
        console.log('Recebendo o obj Usuario do resolver');
        this.usuario = info.usuario;
      }
    );
  }

  editarContato(){
    this.router.navigate(['/usuarios', this.usuario.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
