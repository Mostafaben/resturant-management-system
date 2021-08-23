import { Component, OnInit } from '@angular/core';
import COLORS from 'src/app/statics/colors.statics';

const data = [
  { foodName: 'Pizza', count: 10 },
  { foodName: 'Sandwich', count: 190 },
  { foodName: 'Coca cola', count: 20 },
  { foodName: 'Pizza', count: 10 },
  { foodName: 'Sandwich', count: 190 },
];

@Component({
  selector: 'app-top-food-chart',
  templateUrl: './top-food-chart.component.html',
  styleUrls: ['./top-food-chart.component.scss'],
})
export class TopFoodChartComponent implements OnInit {
  public labels: string[] = data.map((value) => value.foodName);
  public data: number[] = data.map((value) => value.count);
  public chartConfigs: any;
  private _chartColors: string[] = this._createColors(this.data.length);

  public dataSets = [
    {
      data: this.data,
      labels: this.labels,
    },
  ];
  constructor() {}
  ngOnInit(): void {
    console.log(this._chartColors);

    this.chartConfigs = this._configureChart();
  }

  private _generateRandomNumber() {
    return Math.floor(Math.random() * 256);
  }

  private _createColors(len: number) {
    return COLORS.sort((_) => 0.5 - Math.random())
      .slice(0, len)
      .map((color) => color.hex);
  }

  private _configureChart() {
    return {
      chartOptions: { responsive: true, maintainAspectRatio: false },
      doughnutChartColors: [
        {
          backgroundColor: this._chartColors,
        },
      ],
      doughnutChartLegend: true,
      doughnutChartType: 'doughnut',
      doughnutChartData: this.dataSets,
    };
  }
}
