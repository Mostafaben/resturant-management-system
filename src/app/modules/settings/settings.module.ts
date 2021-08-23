import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from './components/change-password-dialog/change-password-dialog.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    ProfileCardComponent,
    ChangePasswordDialogComponent,
    CustomSelectComponent,
  ],
  imports: [CommonModule, SettingsRoutingModule, MatDialogModule],
  entryComponents: [ChangePasswordDialogComponent],
})
export class SettingsModule {}
