import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ModelsCodeStructureComponent } from '../models-code-structure/models-code-structure.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModelDetailsService } from '../../model-details.service';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,ModelsCodeStructureComponent,CommonModule],
  providers:[],

  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {

  sidebar_list:any[] = [
    {
      name: 'Admin',
      link: '/codehub/models/structure/admin',
      id: 1,
    },
    {
      name: 'Admin User Log',
      link: '/codehub/models/structure/adminUserLog',
      id: 2,
    },
    {
      name: 'Billing',
      link: '/codehub/models/structure/billing',
      id: 3,
    },

    {
      name: 'Customer',
      link: '/codehub/models/structure/customer',
      id: 5,
    },
    {
      name: 'Customer Log',
      link: '/codehub/models/structure/customerLog',
      id: 6,
    },
    {
      name: 'Customer Report',
      link: '/codehub/models/structure/customerReport',
      id: 7,
    },
    {
      name: 'Instance',
      link: '/codehub/models/structure/instance',
      id: 8,
    },
    {
      name: 'Instance Log',
      link: '/codehub/models/structure/instanceLog',
      id: 9,
    },
    {
      name: 'Instance User',
      link: '/codehub/models/structure/instanceUser',
      id: 10,
    },
    {
      name: 'Label',
      link: '/codehub/models/structure/label',
      id: 11,
    },

    {
      name: 'Partner',
      link: '/codehub/models/structure/partner',
      id: 14,
    },
    {
      name: 'Partner Log',
      link: '/codehub/models/structure/partnerLog',
      id: 15,
    },
    {
      name: 'Payment',
      link: '/codehub/models/structure/payment',
      id: 16,
    },
    {
      name: 'Plan',
      link: '/codehub/models/structure/plan',
      id: 17,
    },
    {
      name: 'Product',
      link: '/codehub/models/structure/product',
      id: 18,
    },

    {
      name: 'Server',
      link: '/codehub/models/structure/server',
      id: 20,
    },
    {
      name: 'Subscription Log',
      link: '/codehub/models/structure/subscriptionLog',
      id: 21,
    },
    {
      name: 'Suscription',
      link: '/codehub/models/structure/suscription',
      id: 22,
    },
    {
      name: 'Tally Data',
      link: '/codehub/models/structure/tallyData',
      id: 23,
    },
    {
      name: 'Tally Version',
      link: '/codehub/models/structure/tallyVersion',
      id: 24,
    },
    {
      name: 'Temp Roles',
      link: '/codehub/models/structure/tempRoles',
      id: 25,
    },
    {
      name: 'Ticket',
      link: '/codehub/models/structure/ticket',
      id: 26,
    },
    {
      name: 'Time Range',
      link: '/codehub/models/structure/timeRange',
      id: 27,
    },
    {
      name: 'Virtual Machine Log',
      link: '/codehub/models/structure/virtualMachineLog',
      id: 28,
    }
];
currentRoute:any
code:any
modelDetails:any
constructor(public router: Router, public route: ActivatedRoute,public get_models:ModelDetailsService) {
  this.route.paramMap.subscribe((res) => {
    
    this.currentRoute = (res.get('type') as any).toLowerCase()
  })
}


}
