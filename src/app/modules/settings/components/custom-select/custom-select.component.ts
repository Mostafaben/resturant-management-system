import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  constructor() {}

  isOpen: boolean = false;
  options: string[] = new Array(10).fill(null).map((_, index) => `option`);
  selectedOption: number = 0;

  ngOnInit(): void {}

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

  changeSelectedOption(option: number) {
    this.selectedOption = option;
  }
}
