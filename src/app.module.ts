import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsConsumerService } from './sqs.consumer';
import {WeatherModule} from './weather/weather.module';

const DATABASE_USER = process.env.DATABASE_USER || 'root';
const DATABASE_PASS = process.env.DATABASE_PASS || 'pass';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env',}),
    CqrsModule,
    WeatherModule, 
    //MongooseModule.forRoot(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@localhost:27017/`)
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${DATABASE_USER}:${DATABASE_PASS}@localhost:27017/`,
      }),
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SqsConsumerService,
  ],
})
export class AppModule {}
