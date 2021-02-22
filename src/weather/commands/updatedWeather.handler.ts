import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdatedWeatherCommand } from './updateWeather.command';
import { WeatherRepository } from '../repository/weather.repository';

@CommandHandler(UpdatedWeatherCommand)
export class UpdatedWeatherHandler implements ICommandHandler<UpdatedWeatherCommand>{
  constructor(
    private readonly weatherRepository: WeatherRepository,
    private readonly publisher: EventPublisher
  ) {}
  async execute(command: UpdatedWeatherCommand){
    const { id, weatherDateTime } = command;
    return {};
  }
}