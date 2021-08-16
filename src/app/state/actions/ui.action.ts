import { createAction, props } from '@ngrx/store';

export const toggleSideMenuAction = createAction(
  '[UI] toggle_side_menu',
  props<{ isOpen: boolean }>()
);
