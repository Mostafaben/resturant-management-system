import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  public statistics: { title: string; count: string; improved: boolean }[] = [
    {
      title: 'Visitors',
      count: '30.5K',
      improved: false,
    },
    {
      title: 'Orders',
      count: '30',
      improved: true,
    },
    {
      title: 'Clients',
      count: '1.5M',
      improved: false,
    },
    {
      title: 'Menu Items',
      count: '200',
      improved: false,
    },
  ];

  readonly orderStates = ['Served', 'Pending', 'Canceled'];

  public recentOrders: {
    id: number;
    foodName: string;
    imageUrl: string;
    price: number;
    state: number;
  }[] = [
    {
      id: 1,
      foodName: 'Pizza',
      price: 350,
      state: 0,
      imageUrl: '',
    },
    {
      id: 1,
      foodName: 'Pizza',
      price: 350,
      state: 1,
      imageUrl: '',
    },
    {
      id: 1,
      foodName: 'Chawarma',
      price: 250,
      state: 2,
      imageUrl: '',
    },
    {
      id: 1,
      foodName: 'Sandwich',
      price: 150,
      state: 0,
      imageUrl: '',
    },
  ];

  ngOnInit(): void {}
}
