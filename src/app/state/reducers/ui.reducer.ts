import { Action, createReducer, on } from '@ngrx/store';
import { toggleSideMenuAction } from '../actions/ui.action';

export interface IUiState {
  isSideMenuOpen: boolean;
}

const initialeState: IUiState = {
  isSideMenuOpen: true,
};

const _uiReducer = createReducer(
  initialeState,
  on(toggleSideMenuAction, (state, { isOpen }) => ({
    ...state,
    isSideMenuOpen: isOpen,
  }))
);

export default function uiReducer(state: any, action: Action) {
  return _uiReducer(state, action);
}
