import { createAction, props } from '@ngrx/store';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';

const fetchDataMenuAction = createAction('[Menu] fetch_data');
const doneFetchingMenuDataAction = createAction('[Menu] done_fetching_data');
const setMenuDataAction = createAction(
  '[Menu] set_data',
  props<{ data: IFoodDetails[] }>()
);
const addMenuFoodAction = createAction(
  '[Menu] add_food',
  props<{ food: IFoodDetails }>()
);
const updateMenuFoodAction = createAction(
  '[Menu] update_food',
  props<{ food: IFoodDetails }>()
);
const deleteMenuFoodAction = createAction(
  '[Menu] deleteFood',
  props<{ id: number }>()
);
const clearMenuAction = createAction('[Menu] clear_menu');

const filterMenuAction = createAction(
  '[Menu] filter_menu',
  props<{ filter: any }>()
);
const clearMenuFilterAction = createAction('[Menu] clear_filter');
export {
  fetchDataMenuAction,
  clearMenuFilterAction,
  filterMenuAction,
  doneFetchingMenuDataAction,
  setMenuDataAction,
  addMenuFoodAction,
  updateMenuFoodAction,
  deleteMenuFoodAction,
  clearMenuAction,
};
