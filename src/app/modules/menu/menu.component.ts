import { Component, OnInit } from '@angular/core';
import { food, trendingFood } from 'src/app/data/analytics.data';
import { IFood, IFoodDetails } from 'src/app/shared/interfaces/food.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  public food: IFoodDetails[] = food;

  ngOnInit(): void {}
}
