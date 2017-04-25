import { UsuariosGuard } from './guards/usuarios.guard';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
//import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthService } from './login/auth.service';
import { AlertService } from './_services/alert.service';
import { UserService } from './_services/user.service';
import { AuthenticationService } from './_services/authentication.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //UsuariosModule,
    AppRoutingModule,
    //routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    AlertService,
    AuthenticationService,
    UsuariosGuard,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
