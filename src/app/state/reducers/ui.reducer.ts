import { Action, createReducer, on } from '@ngrx/store';
import {
  selectMenuItemAction,
  toggleSideMenuAction,
} from '../actions/ui.action';

export interface IUiState {
  isSideMenuOpen: boolean;
  selectedSideMenuItem: number;
}

const initialeState: IUiState = {
  isSideMenuOpen: true,
  selectedSideMenuItem: 0,
};

const _uiReducer = createReducer(
  initialeState,
  on(toggleSideMenuAction, (state, { isOpen }) => ({
    ...state,
    isSideMenuOpen: isOpen,
  })),
  on(selectMenuItemAction, (state, { selectedItem }) => ({
    ...state,
    selectedSideMenuItem: selectedItem,
  }))
);

export default function uiReducer(state: any, action: Action) {
  return _uiReducer(state, action);
}
