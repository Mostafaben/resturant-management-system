import { IStatistic } from '../modules/analytics/interfaces/statistic.interface';
import { IFood, IFoodDetails } from '../shared/interfaces/food.interface';

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
];

export const clientsData: any[] = [
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
    imageUrl: 'https://picsum.photos/400',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl: 'https://picsum.photos/400',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl: 'https://picsum.photos/400',
  },
  {
    id: 1,
    discount: 0,
    price: 140,
    foodName: 'Pizza Fromage',
    category: { id: 1, name: 'Pizza' },
    imageUrl: 'https://picsum.photos/400',
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

console.table(food);
export { food };
