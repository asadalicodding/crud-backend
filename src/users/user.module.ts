import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserSchema } from 'src/helpers/schema/user.schema';
import { UserController } from './user.controller';
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'studentdb' }),
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),

  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
