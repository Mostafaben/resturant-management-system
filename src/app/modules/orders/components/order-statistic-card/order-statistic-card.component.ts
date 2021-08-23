import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-statistic-card',
  templateUrl: './order-statistic-card.component.html',
  styleUrls: ['./order-statistic-card.component.scss'],
})
export class OrderStatisticCardComponent implements OnInit {
  @Input() item!: {
    title: string;
    count: number;
  };
  @Input() icon!: string;
  constructor() {}

  ngOnInit(): void {}
}
