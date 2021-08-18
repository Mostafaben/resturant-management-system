import { Component, Input, OnInit } from '@angular/core';
import { IClientDetails } from 'src/app/shared/interfaces/client.interface';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.scss'],
})
export class ClientListItemComponent implements OnInit {
  @Input() client!: IClientDetails;
  constructor() {}

  ngOnInit(): void {}
}
