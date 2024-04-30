import { Schema, model } from "mongoose";

export interface UserDocument extends Document {
    parenCategory: string;
  categoryName: string;
  status: boolean;
}

const CategorySchema = new Schema({
    parenCategory: {
    type: String,
  },
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  status:{
    type:Boolean,
  }
});

export const Category = model<UserDocument>("Category", CategorySchema);