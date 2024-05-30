import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebar_list: any[] = [
    {
      name: 'Welcome',
      id: 1,
    },
    {
      name: 'Portals',
      id: 2,
    },
    {
      name: 'Models',
      id: 3,
    },
  ];
  activeId = 0;
  nextRoute: any;
  constructor(public router: Router, public route: ActivatedRoute) {}

  addActiveClass(e: any) {
    debugger;
    this.activeId = e.id;
    console.log(this.activeId);
    this.nextRoute = `/${e.name.toLowerCase()}`;
    this.router.navigateByUrl(this.nextRoute);
    console.log(document.getElementById(e.id));
  }
}
