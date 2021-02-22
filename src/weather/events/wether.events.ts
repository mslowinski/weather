export class WeatherEvent {
  constructor(
    public readonly id: string,
    public readonly weatherDateTime: string,
    public readonly name: string,
    public readonly weatherInfo: Object,
   ) {}
}

export class UpdateWeatherEventSuccess {
  constructor(
    public readonly id: string,
    public readonly weatherDateTime: string,
    public readonly name: string,
    public readonly weatherInfo: Object,
   ) {}
}

export class UpdateWeatherEventFail {
  constructor(
    public readonly id: string,
    public readonly error: object,
  ) {}
}