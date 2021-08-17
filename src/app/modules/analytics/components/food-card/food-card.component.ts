import { Component, Input, OnInit } from '@angular/core';
import { IFood } from '../../../../shared/interfaces/food.interface';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {
  @Input() food!: IFood;
  constructor() {}

  ngOnInit(): void {}
}
