import { createReducer } from '@ngrx/store';
import IError from 'src/app/shared/interfaces/error.interface';

export interface IErrorsState {
  errors: IError[];
}

const initialState = {
  errors: [],
};

const _errorsReducer = createReducer(initialState);
