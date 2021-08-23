import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionListItemComponent } from './components/subscription-list-item/subscription-list-item.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubscriptionDetailsDialogComponent } from './components/suscription-details-dialog/suscription-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    SubscriptionsComponent,
    SubscriptionListItemComponent,
    MySubscriptionComponent,
    SubscriptionDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  entryComponents: [SubscriptionDetailsDialogComponent],
})
export class SubscriptionsModule {}
