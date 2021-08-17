import { Action, createReducer } from '@ngrx/store';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

export interface IOrdersState {
  isFetchingOrders: boolean;
  orders: IOrder[];
}

const initialState: IOrdersState = {
  isFetchingOrders: false,
  orders: [],
};

const _ordersReducer = createReducer(initialState);

export default function ordersReducer(state: any, action: Action) {
  return _ordersReducer(state, action);
}
