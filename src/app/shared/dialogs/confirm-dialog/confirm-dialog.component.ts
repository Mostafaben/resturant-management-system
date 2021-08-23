import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import IDialogData from '../../interfaces/dialog.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {}

  ngOnInit(): void {}

  onClose() {
    this._dialogRef.close(false);
  }
  onConfirm() {
    this._dialogRef.close(true);
  }
}
