import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './modules/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/analytics/analytics.module').then(
        (module) => module.AnalyticsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
