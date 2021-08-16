import { Component, OnInit } from '@angular/core';
import { recentOrders, statistics } from 'src/app/data/analytics.data';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  readonly orderStates = ['Served', 'Pending', 'Canceled'];
  public statistics = statistics;
  public recentOrders = recentOrders;

  constructor() {}

  ngOnInit(): void {}
}
