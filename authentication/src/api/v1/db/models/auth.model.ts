import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'please provide a valid email',
      ],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      match: [
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        'password must contain a 1 small and capital character, 1 number, 1 special character',
      ],
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface Auth {
  email: string;
  password: string;
  active: boolean;
  isDeleted: boolean;
}

export interface AuthModelSchema extends Auth, mongoose.Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
