import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss'],
})
export class ChangePasswordDialogComponent implements OnInit {
  public data: any;

  constructor(
    private _dialogRef: MatDialogRef<ChangePasswordDialogComponent>
  ) {}

  ngOnInit(): void {}

  onCancel() {
    this._dialogRef.close(null);
  }
  onConfirm() {
    this._dialogRef.close(this.data);
  }
}
