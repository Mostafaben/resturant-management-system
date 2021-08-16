import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { RecentOrdersListComponent } from './components/recent-orders-list/recent-orders-list.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';

@NgModule({
  declarations: [AnalyticsComponent, RecentOrdersListComponent, StatisticsCardComponent],
  imports: [CommonModule, AnalyticsRoutingModule],
})
export class AnalyticsModule {}
