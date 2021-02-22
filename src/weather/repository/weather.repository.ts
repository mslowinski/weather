import { Injectable } from '@nestjs/common';
import { WeatherModel } from '../models/weather.model';
import { Weather } from '../schemas/weather.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WeatherRepository {
  constructor(@InjectModel('Weather') private readonly model: Model<Weather>){}
  
  async updateWeatherInfo(id: string, dt: string, name: string, dto: Object) {
    try {
      const document = await this.model.findOne({id: id}).exec();
      if(document) {
        const updatedDocument = await this.model.updateOne({ 
          id: document.id}, 
          { $set: {weatherDateTime: dt, name: name, weatherInfo: dto}, 
            $currentDate: { lastModified: true }
          })
      } else {
        const newDoc = new this.model({
          id,
          weatherDateTime: dt,
          name,
          weatherInfo: dto,
        });
        await newDoc.save();
      }
      const response = new WeatherModel(dt);
      return response;
    } catch(e) {
      console.log(e);
    }
  }
}
