import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SqsConsumerService } from './sqs.consumer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const sqsConsumer = app.get(SqsConsumerService);
  await sqsConsumer.start();
  // tslint:disable-next-line:no-console
  console.log('SQS Consumer Worker Started');
}
bootstrap();
