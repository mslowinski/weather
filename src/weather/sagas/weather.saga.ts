import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WeatherEvent, UpdateWeatherEventSuccess } from '../events/wether.events';
import { UpdateWeatherCommand, UpdatedWeatherCommand } from '../commands/updateWeather.command'; 

@Injectable()
export class WeatherSaga {

  @Saga()
  updateWeather = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(WeatherEvent),
      map((event: WeatherEvent) => {
        return new UpdateWeatherCommand(event.id, event.weatherDateTime, event.name,  event.weatherInfo);
      })
    )
  }
  @Saga()
  updateWeatherSuccess = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UpdateWeatherEventSuccess),
      map((event: UpdateWeatherEventSuccess) => {
        return new UpdatedWeatherCommand(event.id, event.weatherDateTime);
      })
    )
  }
}


