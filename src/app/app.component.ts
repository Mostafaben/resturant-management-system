import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  selectMenuItemAction,
  toggleSideMenuAction,
} from './state/actions/ui.action';
import { IUiState } from './state/reducers/ui.reducer';
import { ROUTES } from './statics/routes.statics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
