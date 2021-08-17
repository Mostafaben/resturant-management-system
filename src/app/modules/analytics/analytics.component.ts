import { Component, OnInit } from '@angular/core';
import {
  clientsData,
  recentOrders,
  statistics,
  trendingFood,
} from 'src/app/data/analytics.data';
import { IFood } from 'src/app/shared/interfaces/food.interface';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  readonly orderStates = ['Served', 'Pending', 'Canceled'];
  public statistics = statistics;
  public recentOrders = recentOrders;
  public clientsData: any[] = clientsData;
  public trendingFood: IFood[] = trendingFood;

  constructor() {}

  ngOnInit(): void {}
}
