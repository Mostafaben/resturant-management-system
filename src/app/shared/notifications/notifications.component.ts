import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeAlertAction } from 'src/app/state/actions/alert.actions';
import IAlert from '../interfaces/alert.interface';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-40px)' }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 0 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms', style({ transform: 'translateY(100px)' })),
      ]),
    ]),
  ],
})
export class NotificationsComponent implements OnInit {
  @Input() alert!: IAlert;
  readonly TIME_OUT = 5000;
  constructor(private _alertsStore: Store<{ alert: IAlert[] }>) {
    this._alertsStore.select('alert');
  }

  dispatchDelete() {
    this._alertsStore.dispatch(removeAlertAction({ id: this.alert.id }));
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.dispatchDelete();
    }, this.TIME_OUT);
  }
}
