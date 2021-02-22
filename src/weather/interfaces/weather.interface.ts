import { Document } from 'mongoose';

export interface IWeatherInterface extends Document {
  id: string,
  weatherDateTime: string,
  name: string;
  weatherInfo: Object
}
