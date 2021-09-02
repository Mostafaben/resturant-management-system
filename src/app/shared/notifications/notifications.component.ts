import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeAlertAction } from 'src/app/state/actions/alert.actions';
import IAlert from '../interfaces/alert.interface';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() alert!: IAlert;
  public isClosing: boolean = false;
  readonly TIME_OUT = 5000;

  constructor(private _alertsStore: Store<{ alert: IAlert[] }>) {
    this._alertsStore.select('alert');
  }

  dispatchDelete() {
    this.isClosing = true;
    setTimeout(() => {
      this._alertsStore.dispatch(removeAlertAction({ id: this.alert.id }));
    }, 300);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dispatchDelete();
    }, this.TIME_OUT);
  }
}
