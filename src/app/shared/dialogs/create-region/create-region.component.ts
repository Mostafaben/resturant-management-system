import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-region',
  templateUrl: './create-region.component.html',
  styleUrls: ['./create-region.component.scss'],
})
export class CreateRegionDialogComponent implements OnInit {
  constructor(private _dialogRef: MatDialogRef<CreateRegionDialogComponent>) {}

  ngOnInit(): void {}
  onCancel() {
    this._dialogRef.close(null);
  }
  onConfirm() {
    this._dialogRef.close(true);
  }
}
