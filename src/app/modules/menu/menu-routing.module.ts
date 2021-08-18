import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './layouts/create-product/create-product.component';
import { FoodListingComponent } from './layouts/food-listing/food-listing.component';

const routes: Routes = [
  {
    path: '',
    component: FoodListingComponent,
  },
  {
    path: 'create_food',
    component: CreateProductComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
