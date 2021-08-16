import { IStatistic } from '../modules/analytics/interfaces/statistic.interface';
import { IRecentOrder } from '../shared/interfaces/order.interface';

export const recentOrders: IRecentOrder[] = [
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

export const statistics: IStatistic[] = [
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
