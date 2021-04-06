import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from '../db/models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Authentication') private readonly AuthModel: Model<Auth>,
  ) {}

  async signin() {
    const a = await this.AuthModel.find().exec();
    return true;
  }
}
