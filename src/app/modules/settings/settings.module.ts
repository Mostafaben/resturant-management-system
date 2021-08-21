import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileSettingsComponent, ProfileCardComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule {}
