import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { MenuModule } from './modules/menu/menu.module';
import { SettingsModule } from './modules/settings/settings.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import uiReducer from './state/reducers/ui.reducer';
@NgModule({
  declarations: [AppComponent, SideMenuComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsModule,
    MenuModule,
    SettingsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      ui: uiReducer,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
