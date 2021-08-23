import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { AppComponent } from './app.component';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { MenuModule } from './modules/menu/menu.module';
import { SettingsModule } from './modules/settings/settings.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import menuReducer from './state/reducers/menu.reducer';
import uiReducer from './state/reducers/ui.reducer';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import alertReducer from './state/reducers/alerts.reducer';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    NavBarComponent,
    AppWrapperComponent,
    NotificationsComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsModule,
    MenuModule,
    SettingsModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      ui: uiReducer,
      menu: menuReducer,
      alert: alertReducer,
    }),
  ],
  exports: [ConfirmDialogComponent],
  providers: [],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
