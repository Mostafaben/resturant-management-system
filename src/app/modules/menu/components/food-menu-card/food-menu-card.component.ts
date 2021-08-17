import { Component, Input, OnInit } from '@angular/core';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';

@Component({
  selector: 'app-food-menu-card',
  templateUrl: './food-menu-card.component.html',
  styleUrls: ['./food-menu-card.component.scss'],
})
export class FoodMenuCardComponent implements OnInit {
  @Input() food!: IFoodDetails;
  constructor() {}

  ngOnInit(): void {}
}
