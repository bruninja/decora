<<<<<<< HEAD
import { UsuariosGuard } from './guards/usuarios.guard';
import { AuthGuard } from './guards/auth.guard';
=======
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
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
=======
import { MaterializeModule } from 'angular2-materialize';
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

<<<<<<< HEAD
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PaginaNaoEncontradaComponent
=======
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routing } from './app.routing';
import { usersRouting } from "./users/users.routing";
import { UsersModule } from "./users/users.module";
import { AuthGuard } from './_guards/index';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    RegisterComponent
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
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
=======
    MaterializeModule,
    UsersModule,
    usersRouting,
    routing
  ],
  providers: [
    AuthGuard,
>>>>>>> 1b991c1b961aa5fb2f00029da2d444c9d91c401a
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
