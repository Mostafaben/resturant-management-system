import { createAction, props } from '@ngrx/store';

export const toggleSideMenuAction = createAction(
  '[UI] toggle_side_menu',
  props<{ isOpen: boolean }>()
);

export const selectMenuItemAction = createAction(
  '[UI] selected_side_menu_item',
  props<{ selectedItem: number }>()
);
