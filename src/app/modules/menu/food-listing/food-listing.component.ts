import { Component, OnInit } from '@angular/core';
import { food } from 'src/app/data/analytics.data';
import AlertType from 'src/app/shared/enums/alerts.enum';
import { IFoodDetails } from 'src/app/shared/interfaces/food.interface';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.scss'],
})
export class FoodListingComponent implements OnInit {
  public food: IFoodDetails[] = food;

  constructor(private _uiService: UiService) {}

  ngOnInit(): void {}

  async deleteFood({ id, foodName }: { id: number; foodName: string }) {
    const result = await this._uiService
      .openConfirmDialog(
        'Delete Food',
        `are you sure you want to delete this food ${foodName}`
      )
      .afterClosed()
      .toPromise();

    if (!result) return;
    this._uiService.addNewAlert(
      AlertType.success,
      `this food \' ${foodName} \' was deleted successfully.`
    );
  }
}
