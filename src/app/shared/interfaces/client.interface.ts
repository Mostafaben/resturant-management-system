import { IAddress } from './address.interface';

export interface IClient {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
}

export interface IClientDetails extends IClient {
  address: IAddress;
}
