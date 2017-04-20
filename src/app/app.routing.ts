import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
