import { IStatistic } from '../modules/analytics/interfaces/statistic.interface';
import { IFood, IFoodDetails } from '../shared/interfaces/food.interface';
import { IOrder } from '../shared/interfaces/order.interface';

export const recentOrders: any[] = [
  {
    id: 1,
    foodName: 'Pizza',
    price: 350,
    state: 0,
    imageUrl: '',
    inTable: true,
  },
  {
    id: 1,
    foodName: 'Pizza',
    price: 350,
    state: 1,
    imageUrl: '',
    inTable: true,
  },
  {
    id: 1,
    foodName: 'Chawarma',
    price: 250,
    state: 2,
    imageUrl: '',
    inTable: true,
  },
  {
    id: 1,
    foodName: 'Sandwich',
    price: 150,
    state: 0,
    imageUrl: '',
    inTable: true,
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

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

export const clientsData: any[] = [
  { count: 65, month: 0 },
  { count: 59, month: 1 },
  { count: 80, month: 2 },
  { count: 81, month: 3 },
  { count: 56, month: 4 },
  { count: 55, month: 5 },
  { count: 40, month: 6 },
  { count: 65, month: 0 },
  { count: 59, month: 1 },
  { count: 80, month: 2 },
  { count: 81, month: 3 },
  { count: 56, month: 4 },
  { count: 55, month: 5 },
  { count: 40, month: 6 },
];

export const trendingFood: IFood[] = [
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl:
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl:
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl:
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl:
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
  },
];

let food: IFoodDetails[] = trendingFood.map((food) => ({
  ...food,
  description:
    'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  isAvailable: true,
  ingredients: [],
}));

food = [...food, ...food];

const orders: IOrder[] = new Array(7)
  .fill({
    client: {
      email: 'fm_benlagha@esi.dz',
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
      firstName: 'Mostapha',
      lastName: 'BENLAGHA',
      phoneNumber: '0795836081',
    },
    address: {
      address: 'Babzouar, 22',
      id: 1,
      wilaya: {
        id: 16,
        name: 'Alger',
      },
    },
    foodItems: [
      {
        food: food[0],
        qte: 10,
      },
      {
        food: food[0],
        qte: 10,
      },
      {
        food: food[0],
        qte: 10,
      },
      {
        food: food[0],
        qte: 10,
      },
    ],
    id: 1,
    inTable: true,
    state: 0,
    totalPrice: 1200,
    createdAt: new Date(),
  })
  .map((order) => ({
    ...order,
    state: Math.floor(Math.random() * 4),
    id: Math.floor(Math.random() * 100),
  }));

export { food, orders };
