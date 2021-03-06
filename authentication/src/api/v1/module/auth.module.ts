import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from '../db/models/auth.model';
import { AuthController } from '../controllers';
import { AuthService } from '../services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Authentication',
        schema: AuthSchema,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
