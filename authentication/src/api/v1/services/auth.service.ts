import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LeanDocument, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Auth, AuthModelSchema } from '../db/models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Authentication')
    private readonly AuthModel: Model<AuthModelSchema>,
  ) {}

  async signin() {
    const a = await this.AuthModel.find().exec();
    return true;
  }

  public async signupWithEmail(email: string, password: string) {
    try {
      const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
      const dataObj: Auth = {
        email,
        password: hash,
        active: true,
        isDeleted: false,
      };
      const { password: _, ...rest } = await (
        await new this.AuthModel(dataObj).save()
      ).toJSON();
      return rest;
    } catch (error) {
      throw error;
    }
  }

  public async findByEmail(
    email: string,
  ): Promise<LeanDocument<AuthModelSchema> | undefined> {
    try {
      const auth = await this.AuthModel.findOne({ email, isDeleted: false });
      return auth;
    } catch (error) {
      throw error;
    }
  }

  public async existByEmail(email: string): Promise<boolean> {
    try {
      const exist = !!(await this.findByEmail(email));
      return exist;
    } catch (error) {
      throw error;
    }
  }
}
