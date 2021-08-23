import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.scss'],
})
export class OrderPreviewComponent implements OnInit {
  public orderFood: any[] = new Array(4).fill({
    totalPrice: 12000,
    quantity: 10,
    food: {
      category: 'Pizza',
      foodName: 'Pizza Fromage',
      imageUrl: 'https://picsum.photos/400',
    },
    extra:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  });

  constructor(private _uiService: UiService) {}

  ngOnInit(): void {}

  upgradeOrderState() {
    this._uiService.openConfirmDialog(
      'Approve Order',
      'are you sure you want to approve this order'
    );
  }
  cancelOrder() {
    this._uiService.openConfirmDialog(
      'Cancel Order',
      'are you sure you want to Cancel this order'
    );
  }
}
