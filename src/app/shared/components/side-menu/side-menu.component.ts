import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUiState } from 'src/app/state/reducers/ui.reducer';
import { IRoute } from '../../interfaces/route.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-300px)' }),
        animate('200ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms', style({ transform: 'translateX(-300px)' })),
      ]),
    ]),
  ],
})
export class SideMenuComponent implements OnInit {
  readonly ROUTES: IRoute[] = [
    {
      name: 'Analytics',
      url: '/',
      icon: 'fa-chart-line',
      subSections: [],
    },
    {
      name: 'Invoice',
      url: '/invoice',
      icon: 'fa-coins',
      subSections: [],
    },
    {
      name: 'Menus',
      url: '/menus',
      icon: 'fa-file-alt',
      subSections: [],
    },
    {
      name: 'Orders',
      url: '/orders',
      icon: 'fa-box',
      subSections: [],
    },
    {
      name: 'Clients',
      url: '/clients',
      icon: 'fa-users',
      subSections: [],
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'fa-cog',
      subSections: ['Profile', 'Theme'],
    },
  ];

  @Input() isSideMenuOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
