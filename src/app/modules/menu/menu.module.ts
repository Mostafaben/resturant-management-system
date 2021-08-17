import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { FoodMenuCardComponent } from './components/food-menu-card/food-menu-card.component';
import { ToggleSwitchComponent } from 'src/app/shared/components/toogle-switch/toogle-switch.component';

@NgModule({
  declarations: [MenuComponent, FoodMenuCardComponent, ToggleSwitchComponent],
  imports: [CommonModule, MenuRoutingModule],
  exports: [ToggleSwitchComponent],
})
export class MenuModule {}
