import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      url: "/crear-solicitud"
    },
    {
      label: 'Solicitudes',
      url: "/solicitud"
    },
    {
      label: 'Reclamos',
      url: "/reclamo"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface MenuItem {
  label: string;
  url: string
}
