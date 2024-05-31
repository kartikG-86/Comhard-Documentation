import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public router:Router){}

  logOut(){
    localStorage.removeItem('token')
    window.location.reload()
    window.location.href = "/"

  }
}
