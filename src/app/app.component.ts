import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModelsComponent } from './components/models/models.component';
import { PortalsComponent } from './components/portals/portals.component';
import { CustomerPortalComponent } from './components/customer-portal/customer-portal.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PartnerPortalComponent } from './components/partner-portal/partner-portal.component';
import { ModelsCodeStructureComponent } from './components/models-code-structure/models-code-structure.component';
import {  HttpClient } from '@angular/common/http';
import { ModelDetailsService } from './model-details.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, WelcomeComponent, ModelsComponent,PortalsComponent,ModelsComponent,CustomerPortalComponent,AdminPortalComponent,PartnerPortalComponent,ModelsCodeStructureComponent],
  providers:[ModelDetailsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'comhard-documentation';
}
