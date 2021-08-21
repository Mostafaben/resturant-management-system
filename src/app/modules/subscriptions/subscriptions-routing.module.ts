import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
  },
  {
    path: 'my_subscriptions',
    component: MySubscriptionComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionsRoutingModule {}
