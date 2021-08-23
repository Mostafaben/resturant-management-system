import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MONTHS } from 'src/app/data/analytics.data';
import IDate from 'src/app/shared/interfaces/date.interface';
import { FormatTimeService } from 'src/app/shared/services/format.service';

@Component({
  selector: 'app-order-income-chart',
  templateUrl: './order-income-chart.component.html',
  styleUrls: ['./order-income-chart.component.scss'],
})
export class OrderIncomeChartComponent implements OnInit {
  @Input() data: any[] = [];
  @Output() timeRangeEvent: EventEmitter<{
    from: IDate | null;
    to: IDate | null;
  }> = new EventEmitter();
  public from!: string;
  public to!: string;
  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public chartConfigs: any;

  constructor(private _formatTimeService: FormatTimeService) {}

  ngOnInit(): void {
    this.chartLabels = this._setLabelsFromData();
    this.chartData = this._setChartData();
    this.chartConfigs = this._configureChart();
  }

  private _setLabelsFromData() {
    return MONTHS;
  }

  private _setChartData() {
    return this.data.map((value) => value.count);
  }

  private _configureChart() {
    return {
      chartOptions: { responsive: true, maintainAspectRatio: false },
      barChartColors: [
        {
          borderColor: 'red',
          backgroundColor: 'rgba(255,0,0,0.3)',
        },
      ],
      barChartLegend: true,
      barChartType: 'bar',
      barChartData: [
        {
          data: this.chartData,
          label: 'Orders Income',
        },
      ],
    };
  }

  handleTimeRangeChange() {
    this.timeRangeEvent.emit({
      from: this._formatTimeService.formatDateToMYD(this.from),
      to: this._formatTimeService.formatDateToMYD(this.to),
    });
  }
}
