import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherSchema, Weather } from './schemas/weather.schema';
import { WeatherSaga } from './sagas/weather.saga';
import { WeatherHandler } from './commands/updateWeather.handler';
import { WeatherRepository } from './repository/weather.repository'

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'Weather', schema: WeatherSchema }])
  ],
  providers: [
    WeatherSaga,
    WeatherHandler,
    WeatherRepository,
  ],
})
export class WeatherModule {}