import { IRoute } from '../shared/interfaces/route.interface';

export const ROUTES: IRoute[] = [
  {
    name: 'Analytics',
    url: 'analytics',
    icon: 'fa-chart-line',
    subSections: [],
  },
  {
    name: 'Invoice',
    url: 'invoice',
    icon: 'fa-coins',
    subSections: [],
  },
  {
    name: 'Subscription',
    url: 'subscriptions',
    icon: 'fa-coins',
    subSections: [
      { name: 'Available Subscriptions', url: '' },
      { name: 'My Subscription', url: 'my_subscription' },
    ],
  },
  {
    name: 'Menus',
    url: 'menu',
    icon: 'fa-file-alt',
    subSections: [
      {
        name: 'Listings',
        url: '',
      },
      {
        name: 'Create Food',
        url: 'create_food',
      },
    ],
  },
  {
    name: 'Orders',
    url: 'orders',
    icon: 'fa-box',
    subSections: [],
  },
  // {
  //   name: 'Clients',
  //   url: 'clients',
  //   icon: 'fa-users',
  //   subSections: [],
  // },
  {
    name: 'Settings',
    url: 'settings',
    icon: 'fa-cog',
    subSections: [{ name: 'Profile', url: '' }],
  },
];
