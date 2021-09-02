import { Component, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/data/analytics.data';
import { DATA } from 'src/app/data/finance.data';
import IDate from 'src/app/shared/interfaces/date.interface';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent implements OnInit {
  public incomeData = DATA;

  constructor() {}

  ngOnInit(): void {}

  handleTimeChange(event: { from: IDate | null; to: IDate | null }) {}
}
