import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Weather } from './schemas/weather.schema';
import { WeatherDto } from './dto/updateWeather.dto';

@Injectable()
export class WeatherService {
  constructor(@InjectModel('Weather') private weatherModel: Model<Weather>) {}

  async update(weatherDto: WeatherDto): Promise<Weather> {
    const createdCat = new this.weatherModel(weatherDto);
    return createdCat.save();
  }

  async findAll(): Promise<Weather[]> {
    return this.weatherModel.find().exec();
  }
}