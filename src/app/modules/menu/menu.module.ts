import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleSwitchComponent } from 'src/app/shared/components/toogle-switch/toogle-switch.component';
import { FoodMenuCardComponent } from './components/food-menu-card/food-menu-card.component';
import { CreateProductComponent } from './layouts/create-product/create-product.component';
import { FoodListingComponent } from './layouts/food-listing/food-listing.component';
import { MenuRoutingModule } from './menu-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FoodMenuCardComponent,
    ToggleSwitchComponent,
    CreateProductComponent,
    FoodListingComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ToggleSwitchComponent],
})
export class MenuModule {}
