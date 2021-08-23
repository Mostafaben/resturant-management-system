import { Action, createReducer, on } from '@ngrx/store';
import IAlert from 'src/app/shared/interfaces/alert.interface';
import {
  addAlertAction,
  clearAlertAction,
  removeAlertAction,
} from '../actions/alert.actions';

const initialState: IAlert[] = [];

const _alertReducer = createReducer(
  initialState,
  on(addAlertAction, (state, props) => [...state, props.alert]),
  on(removeAlertAction, (state, props) =>
    [...state].filter((alert) => alert.id != props.id)
  ),
  on(clearAlertAction, () => [])
);

const alertReducer = (state: any, action: Action) =>
  _alertReducer(state, action);

export default alertReducer;
