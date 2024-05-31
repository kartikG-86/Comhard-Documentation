import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  cards = [
    {
      heading:"Explore Our Company",
      paragraph:"Embark on a journey to discover our company's story and values.",
      id:1,
      link:'https://www.comhard.co.in/'
    },
    {
      heading:"Explore Our Portals",
      paragraph:"Explore our company's diverse portals and discover the innovative solutions we offer.",
      id:2,
      link:'codehub/welcome'
    }
  ]

}
