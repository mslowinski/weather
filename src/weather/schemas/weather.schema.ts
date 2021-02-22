import * as mongoose from 'mongoose';

export const WeatherSchema = new mongoose.Schema({
  id: String,
  weatherDateTime: String,
  name: String,
  weatherInfo: Object,
});

export interface Weather extends mongoose.Document {
  id: string;
  weatherDateTime: String;
  name: String;
  weatherInfo: Object;
}