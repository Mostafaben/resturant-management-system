import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  constructor(private _uiService: UiService) {}

  ngOnInit(): void {}

  openChangePassword() {
    this._uiService.openChangePasswordDialog();
  }
}
