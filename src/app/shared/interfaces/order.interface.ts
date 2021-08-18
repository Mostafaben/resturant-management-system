import { IAddress } from './address.interface';
import { IClient } from './client.interface';
import { IFood } from './food.interface';

export interface IOrder {
  id: number;
  foodItems: Array<{ food: IFood; qte: number }>;
  totalPrice: number;
  state: number;
  inTable: boolean;
  client: IClient;
  address: IAddress;
  createdAt: Date;
}
