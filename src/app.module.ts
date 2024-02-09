import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI),
  AuthModule,
  ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal: true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
