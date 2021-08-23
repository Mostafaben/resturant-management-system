import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';

@Component({
  selector: 'app-food-menu-card',
  templateUrl: './food-menu-card.component.html',
  styleUrls: ['./food-menu-card.component.scss'],
})
export class FoodMenuCardComponent implements OnInit {
  @Input() food!: IFoodDetails;
  @Output() deleteFoodEvent: EventEmitter<{ id: number; foodName: string }> =
    new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  deleteFood() {
    this.deleteFoodEvent.emit({
      id: this.food.id,
      foodName: this.food.foodName,
    });
  }
}
