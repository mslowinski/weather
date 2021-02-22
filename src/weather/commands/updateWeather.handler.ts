import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdateWeatherCommand } from './updateWeather.command';
import { WeatherRepository } from '../repository/weather.repository';

@CommandHandler(UpdateWeatherCommand)
export class WeatherHandler implements ICommandHandler<UpdateWeatherCommand>{
  constructor(
    private readonly weatherRepository: WeatherRepository,
    private readonly publisher: EventPublisher
  ) {}
  async execute(command: UpdateWeatherCommand){
    const { id, weatherDateTime, name, weatherInfo } = command;
    const weather = this.publisher.mergeObjectContext(
      await this.weatherRepository.updateWeatherInfo(id, weatherDateTime, name, weatherInfo)
    );
    weather.commit(); 
  }
}