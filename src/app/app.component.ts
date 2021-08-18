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
export class AppComponent implements OnInit, OnDestroy {
  private uiState: Observable<IUiState>;
  public isSideMenuOpen: boolean = true;
  public sideMenuSelectedItem: number = 0;
  private _eventSubscription$: Subscription = new Subscription();
  public ROUTES = ROUTES;

  constructor(
    private _store: Store<{ ui: IUiState }>,
    private _router: Router
  ) {
    this.uiState = this._store.select('ui');
    this.handleRouterChange();
  }

  ngOnInit(): void {
    this.uiState.subscribe((value) => {
      this.isSideMenuOpen = value.isSideMenuOpen;
      this.sideMenuSelectedItem = value.selectedSideMenuItem;
    });
  }

  handleRouterChange() {
    this._eventSubscription$ = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const index = ROUTES.findIndex(({ url }) => event.url.includes(url));
        this._store.dispatch(selectMenuItemAction({ selectedItem: index }));
      }
    });
  }
  toggleSideMenu() {
    this._store.dispatch(
      toggleSideMenuAction({ isOpen: !this.isSideMenuOpen })
    );
  }

  handleCloseSideMenu() {
    this._store.dispatch(toggleSideMenuAction({ isOpen: false }));
  }
  ngOnDestroy(): void {
    this._eventSubscription$.unsubscribe();
  }
}
