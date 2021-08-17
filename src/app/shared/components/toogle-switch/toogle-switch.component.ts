import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toogle-switch.component.html',
  styleUrls: ['./toogle-switch.component.scss'],
})
export class ToggleSwitchComponent implements OnInit {
  @Input() state: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleSwitch() {
    this.state = !this.state;
    this.toggle.emit(this.state);
  }
}
