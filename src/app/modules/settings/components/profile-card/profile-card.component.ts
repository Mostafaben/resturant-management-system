import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Output() changePassword: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleChangePasswordClick() {
    this.changePassword.emit();
  }
}
