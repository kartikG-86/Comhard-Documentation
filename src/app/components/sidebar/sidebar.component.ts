import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit  {
 @Input() sidebar_list:any
  activeId = 0;
  nextRoute: any;
  currentRoute:any
  constructor(public router: Router, public route: ActivatedRoute) {
    this.route.paramMap.subscribe((res) => {
      this.currentRoute = res.get('section')
      if(this.currentRoute != null && this.sidebar_list != undefined){
        let index = this.sidebar_list.findIndex((item:any) => item.name.split(' ').join('').toLowerCase() == this.currentRoute.toLowerCase())
        this.activeId = (this.sidebar_list[index] as any).id
      }
    })
  }

  ngOnInit(): void {
    if(this.currentRoute != null && this.sidebar_list != undefined){
      let index = this.sidebar_list.findIndex((item:any) => item.name.split(' ').join('').toLowerCase() == this.currentRoute.toLowerCase())
      this.activeId = (this.sidebar_list[index] as any).id
    }
  }
  




}
