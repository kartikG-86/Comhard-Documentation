import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModelsComponent } from './components/models/models.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'codehub/:section', component: HomeComponent },
  { path: 'codehub/models/structure', component: ModelsComponent },
  { path: 'codehub/models/structure/:type', component: ModelsComponent },
];
