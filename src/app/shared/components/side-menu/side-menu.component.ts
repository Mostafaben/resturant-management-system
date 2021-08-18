import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from '../../interfaces/route.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-300px)' }),
        animate('200ms', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('200ms', style({ transform: 'translateX(-300px)' })),
      ]),
    ]),
    trigger('listAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('100ms', style({})),
      ]),
      transition(':leave', [
        style({}),
        animate('100ms', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class SideMenuComponent implements OnInit, OnDestroy {
  @Input() routes: IRoute[] = [];
  @Input() selectedItem!: number;
  @Input() isSideMenuOpen: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(private _router: Router) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  closeSideMenu() {
    this.close.emit(true);
  }
}
