import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AppWrapperComponent,
    children: [
      {
        path: 'analytics',
        loadChildren: () =>
          import('./modules/analytics/analytics.module').then(
            (module) => module.AnalyticsModule
          ),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./modules/menu/menu.module').then(
            (module) => module.MenuModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('./modules/subscriptions/subscriptions.module').then(
            (module) => module.SubscriptionsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/orders/orders.module').then(
            (module) => module.OrdersModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./modules/finance/finance.module').then(
            (module) => module.FinanceModule
          ),
      },
      {
        path: '**',
        redirectTo: 'analytics',
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
