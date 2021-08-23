import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance/finance.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { OrderIncomeChartComponent } from './components/order-income-chart/order-income-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopFoodChartComponent } from './top-food-chart/top-food-chart.component';

@NgModule({
  declarations: [FinanceComponent, OrderIncomeChartComponent, TopFoodChartComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FinanceModule {}
