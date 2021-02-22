import { AggregateRoot } from '@nestjs/cqrs';
import { UpdateWeatherEventSuccess, UpdateWeatherEventFail } from '../events/wether.events';

export class WeatherModel extends AggregateRoot {
  constructor(private readonly weatherInfo: Object) {
    super();
  }

  updateWeatherInfo(id: string, weatherDateTime: string, name: string, weatherInfo: Object) {
    try {
      // dispatch event success
      this.apply(new UpdateWeatherEventSuccess(id, weatherDateTime, name, weatherInfo));
    } catch(error) {
      this.apply(new UpdateWeatherEventFail(id, error));
    }
  }
}