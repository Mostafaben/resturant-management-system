import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { FoodListingComponent } from './food-listing/food-listing.component';

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
