import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionListItemComponent } from './components/subscription-list-item/subscription-list-item.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';

@NgModule({
  declarations: [
    SubscriptionsComponent,
    SubscriptionListItemComponent,
    MySubscriptionComponent,
  ],
  imports: [CommonModule, SubscriptionsRoutingModule],
})
export class SubscriptionsModule {}
