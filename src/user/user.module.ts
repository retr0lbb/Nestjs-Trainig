import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    
  MongooseModule.forFeature([{
    name: "User",
    schema: UserSchema
  }]),
  AuthModule
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
