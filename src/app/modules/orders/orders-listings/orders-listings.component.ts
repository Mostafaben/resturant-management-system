import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { food, orders } from 'src/app/data/analytics.data';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-orders-listings',
  templateUrl: './orders-listings.component.html',
  styleUrls: ['./orders-listings.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('100ms', style({})),
      ]),
      transition(':leave', [
        style({}),
        animate('100ms', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class OrdersListingsComponent implements OnInit {
  readonly ORDER_STATES = ['pending', 'on process', 'delivered', 'canceled'];

  public expendedOrder!: number;
  public item = {
    title: 'On the way',
    icon: 'fa-truck-moving ',
    count: 17,
  };
  public orders: IOrder[] = orders;
  constructor() {}

  ngOnInit(): void {}

  setOrderClass(orderState: number): string {
    switch (orderState) {
      case 0:
        return 'is-light';
      case 1:
        return 'is-link';
      case 2:
        return 'is-primary';
      case 3:
        return 'is-danger';
      default:
        return 'is-light';
    }
  }

  expendOrder(id: number) {
    if (this.expendedOrder == id) this.expendedOrder = -1;
    else this.expendedOrder = id;
  }
}
