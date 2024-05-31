import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-portals',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './portals.component.html',
  styleUrl: './portals.component.css'
})
export class PortalsComponent {
  cards = [
    {
      heading:"Customer Portal",
      paragraph:"Our customer portal serves as a user-friendly platform where individuals can conveniently access and utilize Tally software online. It caters to two types of users: administrators and sub-users. Administrators oversee the portal's functionalities, while sub-users enjoy access to its features.",
      id:1,
      link:'codehub/portals/customerPortal'
    },
    {
      heading:"Partner Portal",
      paragraph:"The partner portal serves as a platform for partners to redistribute our cloud portal to a wide range of customers, offering partners enhanced privileges and capabilities beyond those of standard customers. Additionally, partners have the ability to access their customers' accounts effortlessly.",
      id:2,
      link:'codehub/portals/partnerPortal'
    },{
      heading:"Admin Portal",
      paragraph:"The admin portal grants comprehensive access and control to administrators, enabling them to oversee various partner accounts and their associated customer portals. This allows administrators to delve into intricate details about both customers and partners. Additionally, the admin portal boasts full rights and privileges.",
      id:3,
      link:'codehub/portals/adminPortal'
    },
  ]
}
