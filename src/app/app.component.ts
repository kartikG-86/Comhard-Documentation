import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModelsComponent } from './components/models/models.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, WelcomeComponent, ModelsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'comhard-documentation';
}
