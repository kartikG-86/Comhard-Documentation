import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModelsComponent } from './components/models/models.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: HomeComponent },
  { path: 'models', component: HomeComponent },
];
