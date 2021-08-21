import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output() public toggleSideMenu = new EventEmitter();
  @Input() public isSideMenuOpen: boolean = true;

  public isMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handleToggleSideMenu() {
    this.toggleSideMenu.emit();
  }
}
