import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from '@rinminase/ng-charts';
import { FoodCardComponent } from 'src/app/modules/analytics/components/food-card/food-card.component';
import { MenuModule } from '../menu/menu.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { ClientsChartComponent } from './components/clients-chart/clients-chart.component';
import { RecentOrdersListComponent } from './components/recent-orders-list/recent-orders-list.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';

@NgModule({
  declarations: [
    AnalyticsComponent,
    RecentOrdersListComponent,
    StatisticsCardComponent,
    ClientsChartComponent,
    FoodCardComponent,
  ],
  imports: [CommonModule, AnalyticsRoutingModule, ChartsModule, MenuModule],
  exports: [StatisticsCardComponent],
})
export class AnalyticsModule {}
