import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModelsComponent } from './components/models/models.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {path:'',component:LoginComponent},
  // { path: '', component: HomeComponent , canActivate:[authGuard] },
  { path: 'codehub/:section', component: HomeComponent,canActivate:[authGuard] },
  { path: 'codehub/models/structure', component: ModelsComponent,canActivate:[authGuard] },
  { path: 'codehub/models/structure/:type', component: ModelsComponent,canActivate:[authGuard] },
];
