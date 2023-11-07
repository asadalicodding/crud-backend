import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './helpers/schema/user.schema';
import { UserModule } from './users/user.module';
import { MONGODB_URI } from './helpers/constant';
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'studentdb' }),
    MongooseModule.forRoot(MONGODB_URI, { dbName: 'usersdb' }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
