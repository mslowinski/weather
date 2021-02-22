import { Injectable } from '@nestjs/common';
import { Consumer } from 'sqs-consumer';

import { EventBus } from '@nestjs/cqrs';
import { WeatherEvent } from './weather/events/wether.events';

@Injectable()
export class SqsConsumerService {
  public consumer: Consumer;
    constructor(private readonly eventBus: EventBus) {
      this.consumer = Consumer.create({
        queueUrl: 'https://sqs.us-east-1.amazonaws.com/604000636562/weather-event-queue',
        handleMessage: async message => this.handleMessage(message),
      });
    }

    async start() {
      await this.consumer.start();
    }

    async handleMessage(message): Promise<void> {
      const body = JSON.parse(message.Body);
      // tslint:disable-next-line:no-console
      console.log(`Updated weather event received. ID: ${JSON.stringify(body.id)}, DateTime: ${body.dt}`);
      try {
        this.eventBus.publish(
          new WeatherEvent(body.id, body.dt, body.name, body)
        )
      } catch(e) {
        // tslint:disable-next-line:no-console
        console.log(e);
      }      
  }
}
