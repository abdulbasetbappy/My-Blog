import { Schema, model } from "mongoose";

export interface UserDocument extends Document {
  categoryName: string;
  status: boolean;
  createdAt: Date;
}

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  status:{
    type:Boolean,
  },
  createdBy:{
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

export const Category = model<UserDocument>("Category", CategorySchema);