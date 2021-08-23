import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  constructor(private _uiService: UiService) {}

  ngOnInit(): void {}

  addRegion() {
    this._uiService.openCreateRegionDialog();
  }
}
