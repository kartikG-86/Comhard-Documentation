import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModelDetailsService } from '../../model-details.service';

@Component({
  selector: 'app-models-code-structure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './models-code-structure.component.html',
  styleUrl: './models-code-structure.component.css'
})
export class ModelsCodeStructureComponent {
    
  model:any
  currentRoute:any

  constructor(public router:Router,public route:ActivatedRoute,public get_models:ModelDetailsService){
    this.route.paramMap.subscribe((res) => {
      this.currentRoute = res.get('type')?.toLowerCase()
      console.log(this.currentRoute)
      if(this.currentRoute){
        this.get_models.getModelDetails(this.currentRoute).subscribe((res) => {
          // this.model = res
          console.log(res)
          this.model = res
        })

      }
    })
  }

  

  // model = [
  //   {
  //     key: '_id',
  //     dataType: 'Number',
  //     description: 'Auto-incremented unique identifier for each admin',
  //     example: '1',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'name',
  //     dataType: 'String',
  //     description: 'The name of the admin',
  //     example: '"John Doe"',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'role',
  //     dataType: 'String',
  //     description: "The role assigned to the admin, defaulting to 'support'",
  //     example: '"admin"',
  //     structure: 'admin',
  //     default:'support'
  //   },
  //   {
  //     key: 'countryCode',
  //     dataType: 'String',
  //     description: "The country code for the admin's mobile number, defaulting to '+91'",
  //     example: "'+91'",
  //     structure: 'admin',
  //     default:'+91'
  //   },
  //   {
  //     key: 'mobile',
  //     dataType: 'String',
  //     description: 'The mobile number of the admin',
  //     example: '"9876543210"',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'email',
  //     dataType: 'String',
  //     description: 'The email address of the admin',
  //     example: '"admin@example.com"',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'password',
  //     dataType: 'String',
  //     description: "The password for the admin's account (typically hashed)",
  //     example: '"hashed_password"',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'lastLogin',
  //     dataType: 'Date',
  //     description: 'The date and time of the admin\'s last login',
  //     example: 'ISODate("2021-06-10T12:30:00Z")',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'wallet',
  //     dataType: 'Number',
  //     description: "The current balance in the admin's wallet, defaulting to 0",
  //     example: '100',
  //     structure: 'admin',
  //     default:0
  //   },
  //   {
  //     key: 'walletLogs',
  //     dataType: 'Array',
  //     description: 'An array of wallet log entries detailing billing actions',
  //     example: '[{ billingAction: "add funds", billingType: "credit", amount: 50 }]',
  //     structure: 'admin',
  //     details:[{
  //       key:"billingAction",
  //       dataType:"String",
  //       description:'Description of the billing action',
  //       example:'add funds'
  //     },{
  //       key:'billingType',
  //       dataType:'String (enum)',
  //       description:"Type of billing action, either 'credit' or 'debit'",
  //       example:'credit'
  //     },{
  //       key:'amount',
  //       dataType:'Number',
  //       description:'Amount involved in the billing action',
  //       example:50
  //     }]
  //   },
  //   {
  //     key: 'isSuperAdmin',
  //     dataType: 'Boolean',
  //     description: 'Flag indicating if the admin has super admin privileges, defaulting to false',
  //     example: 'true',
  //     structure: 'admin',
  //     default:false
  //   },
  //   {
  //     key: 'isActive',
  //     dataType: 'Boolean',
  //     description: "Flag indicating if the admin's account is active, defaulting to true",
  //     example: 'true',
  //     structure: 'admin',
  //     default:true
  //   },
  //   {
  //     key: 'isDeleted',
  //     dataType: 'Boolean',
  //     description: "Flag indicating if the admin's account is deleted, defaulting to false",
  //     example: 'false',
  //     structure: 'admin',
  //     default:false
  //   },
  //   {
  //     key: 'logo',
  //     dataType: 'String',
  //     description: "URL or path of the admin's portal logo",
  //     example: '"/images/admin-logo.png"',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'accessibleUserIds',
  //     dataType: 'Array',
  //     description: 'List of user IDs that the admin can access',
  //     example: '[1, 2, 3]',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'contact',
  //     dataType: 'Object',
  //     description: 'Contact information for the admin',
  //     example: '{ "sales": "sales@example.com", "support": "support@example.com" }',
  //     structure: 'admin',
  //     details:[{
  //       key:"sales",
  //       dataType:"String",
  //       description:'Contact details for sales',
  //       example:'sales@example.com'
  //     },{
  //       key:'support',
  //       dataType:'String',
  //       description:"Contact details for support",
  //       example:'support@example.com'
  //     },]
  //   },
  //   {
  //     key: 'createdAt',
  //     dataType: 'Date',
  //     description: 'Timestamp when the admin document was created',
  //     example: 'ISODate("2021-06-10T12:00:00Z")',
  //     structure: 'admin'
  //   },
  //   {
  //     key: 'updatedAt',
  //     dataType: 'Date',
  //     description: 'Timestamp when the admin document was last updated',
  //     example: 'ISODate("2021-06-10T12:30:00Z")',
  //     structure: 'admin'
  //   },{
  //     timestamp:'timestamps',
  //     default_value:true,
  //     desc:'Automatically adds createdAt and updatedAt fields to the schema.'
  //   }
  // ];
  
}
