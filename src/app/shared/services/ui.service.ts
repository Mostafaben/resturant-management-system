import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ChangePasswordDialogComponent } from 'src/app/modules/settings/components/change-password-dialog/change-password-dialog.component';
import { SubscriptionDetailsDialogComponent } from 'src/app/modules/subscriptions/components/suscription-details-dialog/suscription-details-dialog.component';
import { addAlertAction } from 'src/app/state/actions/alert.actions';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import AlertType from '../enums/alerts.enum';
import IAlert from '../interfaces/alert.interface';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(
    private dialog: MatDialog,
    private _alertStore: Store<{ alert: IAlert[] }>
  ) {
    this._alertStore.select('alert');
  }

  openConfirmDialog(title: string, message: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {
        message,
        title,
      },
      width: '400px',
    });
  }

  openSubscriptionDetailsDialog(subscription: any) {
    return this.dialog.open(SubscriptionDetailsDialogComponent, {
      width: '500px',
    });
  }

  openChangePasswordDialog() {
    return this.dialog.open(ChangePasswordDialogComponent, {
      width: '450px',
    });
  }

  addNewAlert(type: AlertType, message: string) {
    const alert: IAlert = {
      id: Date.now(),
      type,
      isShown: true,
      message,
    };
    this._alertStore.dispatch(addAlertAction({ alert }));
  }
}
