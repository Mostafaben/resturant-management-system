import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPreviewComponent } from './order-preview/order-preview.component';
import { OrdersListingsComponent } from './orders-listings/orders-listings.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersListingsComponent,
  },
  {
    path: ':id',
    component: OrderPreviewComponent,
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
export class OrdersRoutingModule {}
