import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnalyticsModule } from '../analytics/analytics.module';
import { OrdersListingsComponent } from './orders-listings/orders-listings.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderStatisticCardComponent } from './components/order-statistic-card/order-statistic-card.component';

@NgModule({
  declarations: [OrdersListingsComponent, OrderStatisticCardComponent],
  imports: [CommonModule, OrdersRoutingModule, AnalyticsModule],
})
export class OrdersModule {}
