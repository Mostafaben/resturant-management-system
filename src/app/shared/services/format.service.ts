import { Injectable } from '@angular/core';
import IDate from '../interfaces/date.interface';

@Injectable({
  providedIn: 'root',
})
export class FormatTimeService {
  constructor() {}

  formatDateToMYD(date: string): IDate | null {
    if (!date || date.length == 0) return null;
    const [year, month, day] = date.split('-').map((value) => parseInt(value));
    return {
      year,
      month,
      day,
    };
  }
}
