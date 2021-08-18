import { IAddress } from './address.interface';

export interface IClient {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phoneNumber: string;
}

export interface IClientDetails extends IClient {
  address: IAddress;
  isVerified: boolean;
  createdAt: Date;
}
