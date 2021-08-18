import { Component, OnInit } from '@angular/core';
import {
  IClient,
  IClientDetails,
} from 'src/app/shared/interfaces/client.interface';

@Component({
  selector: 'app-clients-listins',
  templateUrl: './clients-listins.component.html',
  styleUrls: ['./clients-listins.component.scss'],
})
export class ClientsListingsComponent implements OnInit {
  constructor() {}

  clients: IClientDetails[] = new Array(7).fill({
    id: 1,
    email: 'fm_benlagha@esi.dz',
    lastName: 'BENLAGHA',
    firstName: 'Mostapha',
    imageUrl: 'https://picsum.photos/400',
    phoneNumber: '066434232',
    address: {
      id: 1,
      address: 'El harach alger',
      wilaya: { id: 16, name: 'Alger' },
    },
    isVerified: true,
    createdAt: new Date(),
  });
  ngOnInit(): void {}
}
