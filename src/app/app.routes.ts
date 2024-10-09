import { Routes } from '@angular/router';
import { HomeComponent } from './crud/mini-project/home/home.component';
import { AddComponent } from './crud/mini-project/add/add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
