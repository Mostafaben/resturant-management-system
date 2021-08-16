import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleSideMenuAction } from './state/actions/ui.action';
import { IUiState } from './state/reducers/ui.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private uiState: Observable<IUiState>;

  public isSideMenuOpen: boolean = true;

  constructor(private _store: Store<{ ui: IUiState }>) {
    this.uiState = this._store.select('ui');
  }

  ngOnInit(): void {
    this.uiState.subscribe(
      (value) => (this.isSideMenuOpen = value.isSideMenuOpen)
    );
  }

  toggleSideMenu() {
    this._store.dispatch(
      toggleSideMenuAction({ isOpen: !this.isSideMenuOpen })
    );
  }
}
