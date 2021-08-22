import { Action, createReducer, on } from '@ngrx/store';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';
import {
  addMenuFoodAction,
  clearMenuAction,
  clearMenuFilterAction,
  deleteMenuFoodAction,
  doneFetchingMenuDataAction,
  fetchDataMenuAction,
  filterMenuAction,
  setMenuDataAction,
  updateMenuFoodAction,
} from '../actions/menu.action';

export interface IMenuState {
  isLoading: boolean;
  food: IFoodDetails[];
  filter: any;
}

const initialState: IMenuState = { food: [], isLoading: false, filter: null };
const _menuReducer = createReducer(
  initialState,
  on(fetchDataMenuAction, (state) => ({ ...state, isLoading: true })),
  on(doneFetchingMenuDataAction, (state) => ({ ...state, isLoading: false })),
  on(setMenuDataAction, (state, props) => ({
    ...state,
    isLoading: false,
    food: props.data,
  })),
  on(deleteMenuFoodAction, (state, props) => {
    const newData = [...state.food].filter(
      (foodItem) => foodItem.id != props.id
    );
    return { ...state, isLoading: false, food: newData };
  }),
  on(clearMenuAction, (state) => ({ ...state, isLoading: false, food: [] })),
  on(addMenuFoodAction, (state, props) => ({
    ...state,
    isLoading: false,
    food: [...state.food, props.food],
  })),
  on(updateMenuFoodAction, (state, { food: newFood }) => {
    const { food } = state;
    const index = food.findIndex((foodItem) => foodItem.id == newFood.id);
    food[index] = newFood;
    return { ...state, isLoading: false, food: [...food] };
  }),
  on(filterMenuAction, (state, props) => ({ ...state, filter: props.filter })),
  on(clearMenuFilterAction, (state) => ({ ...state, filter: null }))
);
const menuReducer = (state: any, action: Action) => _menuReducer(state, action);

export default menuReducer;
