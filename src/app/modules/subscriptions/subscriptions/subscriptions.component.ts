import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  constructor(private _uiService: UiService) {}

  ngOnInit(): void {}

  async openDetails() {
    const result = await this._uiService
      .openSubscriptionDetailsDialog({})
      .afterClosed()
      .toPromise();
    if (!result) return;

    this._uiService.openConfirmDialog(
      'Request Subscription',
      'are you sure you want to request this Subscription ?'
    );
  }
}
