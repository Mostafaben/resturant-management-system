import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
