import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'character-detail/:id',
    loadComponent: () => import('./character-detail/character-detail.page').then( (m) => m.CharacterDetailPage),
  },

 
];
