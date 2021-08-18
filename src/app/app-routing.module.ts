import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
      import('./modules/menu/menu.module').then((module) => module.MenuModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./modules/clients/clients.module').then(
        (module) => module.ClientsModule
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
