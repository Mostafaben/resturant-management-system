import { Component, OnInit } from '@angular/core';
import { food } from 'src/app/data/analytics.data';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.scss'],
})
export class FoodListingComponent implements OnInit {
  public food: IFoodDetails[] = food;

  constructor() {}

  ngOnInit(): void {}
}
