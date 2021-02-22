export class UpdateWeatherCommand {
  constructor(
    public readonly id: string,
    public readonly weatherDateTime: string,
    public readonly name: string,
    public readonly weatherInfo: Object,
   ) {}
}
export class UpdatedWeatherCommand {
  constructor(
    public readonly id: string,
    public readonly weatherDateTime: string,
   ) {}
}