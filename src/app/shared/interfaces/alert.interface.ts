import AlertType from '../enums/alerts.enum';

export default interface IAlert {
  id: number;
  title?: string;
  message: string;
  type: AlertType;
  isShown: boolean;
}
