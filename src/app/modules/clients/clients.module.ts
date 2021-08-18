import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsListingsComponent } from './clients-listins.component';
import { ClientListItemComponent } from './components/client-list-item/client-list-item.component';

@NgModule({
  declarations: [ClientsListingsComponent, ClientListItemComponent],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
