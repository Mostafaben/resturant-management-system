import { Component, Input, OnInit } from '@angular/core';
import { Colors } from '@rinminase/ng-charts';
import { MONTHS } from 'src/app/data/analytics.data';

@Component({
  selector: 'app-clients-chart',
  templateUrl: './clients-chart.component.html',
  styleUrls: ['./clients-chart.component.scss'],
})
export class ClientsChartComponent implements OnInit {
  @Input() data: any[] = [];
  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public chartConfigs: any;

  constructor() {}

  ngOnInit(): void {
    this._setLabelsFromData();
    this._setChartData();
    this.chartConfigs = this._configureChart();
  }

  private _setLabelsFromData() {
    this.chartLabels = this.data.map((value) => MONTHS[value.month]);
  }
  private _setChartData() {
    this.chartData = this.data.map((value) => value.count);
  }

  private _configureChart() {
    return {
      chartOptions: { responsive: true, maintainAspectRatio: false },
      barChartColors: [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)',
        },
      ],
      barChartLegend: true,
      barChartType: 'bar',
      barChartData: [
        {
          data: this.chartData,
          label: 'Clients',
        },
      ],
    };
  }
}
