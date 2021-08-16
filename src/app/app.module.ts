import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import uiReducer from './state/reducers/ui.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, SideMenuComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnalyticsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      ui: uiReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
