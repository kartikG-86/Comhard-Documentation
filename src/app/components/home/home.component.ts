import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PortalsComponent } from '../portals/portals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent,WelcomeComponent,PortalsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentRoute:any
  sidebar_list: any[] = [
    {
      name: 'Welcome',
      link:'/codehub/welcome',
      id: 1,
    },
    {
      name: 'Portals',
      id: 2,
      link:'/codehub/portals'
    },
    {
      name: 'Models',
      id: 3,
      link:'/codehub/models/structure/'
    },
  ];
  constructor(public router: Router, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((res) => {
      this.currentRoute = res.get('section')?.toLowerCase()
      console.log(this.currentRoute)
    })
  }
}
