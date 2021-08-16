import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-orders-list',
  templateUrl: './recent-orders-list.component.html',
  styleUrls: ['./recent-orders-list.component.scss'],
})
export class RecentOrdersListComponent implements OnInit {
  constructor() {}
  @Input() recentOrders: any[] = [];
  @Input() orderStates: string[] = [];
  ngOnInit(): void {}
}
