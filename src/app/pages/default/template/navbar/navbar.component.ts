import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {MegaMenuItem} from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isVisible: boolean;
  profile: MenuItem[] = [];
  visibleSidebar1:any;

  constructor() { 
    this.isVisible = false;
  }

  items: MenuItem[] = [];


  ngOnInit() {
    this.items = [

      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        command: () => this.onClick(),
        styleClass: 'menucus'
      },
      {
        label:'Gift Store',
        icon:'pi pi-fw pi-gift',
        command: () => this.onClick(),
        styleClass: 'menucus',

      },
      {
        label:'Language',
        icon:'pi pi-fw pi-language',
        items:[
          {
            label:'Sinhala', 
            icon:'pi pi-fw pi-flag'
          },
          {
            label:'English',
            icon:'pi pi-fw pi-flag'
          }

        ],
        styleClass: 'menucus',

      },
      {
        label:'Search',
        icon:'pi pi-fw pi-search',
        styleClass: 'menucus',
        command: () => this.showResponsiveDialog(),

      },
    ];

    this.profile = [{
      label: 'Options',
      items: [{
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
              this.delete();
          }
      }
      ]},
      {
          label: 'Navigate',
          items: [{
              label: 'Angular',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
          },
          {
              label: 'Router',
              icon: 'pi pi-upload',
              routerLink: '/fileupload'
          }
      ]}
  ];
  }

  update() {
}

delete() {
}

  onClick(){
    console.log("hi")
  }


  showResponsiveDialog() {
    console.log("h")
    this.isVisible = true;
}
}
