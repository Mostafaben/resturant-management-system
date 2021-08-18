export interface IRoute {
  name: string;
  icon: string;
  url: string;
  subSections: ISubRoute[];
}

export interface ISubRoute {
  name: string;
  url: string;
}
