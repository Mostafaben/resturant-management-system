import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-suscription-details-dialog',
  templateUrl: './suscription-details-dialog.component.html',
  styleUrls: ['./suscription-details-dialog.component.scss'],
})
export class SubscriptionDetailsDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SubscriptionDetailsDialogComponent>
  ) {}

  ngOnInit(): void {}
  onClose() {
    this.dialogRef.close(false);
  }
  onRequest() {
    this.dialogRef.close(true);
  }
}
