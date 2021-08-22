import { Component, Input, OnInit } from '@angular/core';
import AlertType from '../enums/alerts.enum';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() message!: string;
  @Input() alertType!: AlertType;

  constructor() {}

  ngOnInit(): void {}
}
