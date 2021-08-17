export interface IAddress {
  id: number;
  wilaya: IWilaya;
  address: string;
}

export interface IWilaya {
  id: number;
  name: string;
}
