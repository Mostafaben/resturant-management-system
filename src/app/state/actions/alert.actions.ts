import { createAction, props } from '@ngrx/store';
import IAlert from 'src/app/shared/interfaces/alert.interface';

const addAlertAction = createAction(
  '[Alert] add_alert',
  props<{ alert: IAlert }>()
);
const removeAlertAction = createAction(
  '[Alert] remove_alert',
  props<{ id: number }>()
);
const clearAlertAction = createAction('[Alert] clear_alert');

export { clearAlertAction, removeAlertAction, addAlertAction };
