import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private _http: HttpClient) {}

  getStatistics() {}

  getTrendingFood() {}
}
