import { Routes } from '@angular/router';
import { Login } from './login/login/login';
import { Callback } from './callback/callback';

export const routes: Routes = [
  { path: '', component: Login },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home').then(m => m.Home),
  },
  { path: 'callback', component: Callback },
  { path: '**', redirectTo: '' },
];
