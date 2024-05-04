import { Schema, model } from "mongoose";

export interface PostDocument extends Document {
    parenCategory: string;
    categoryName: string;
    status: boolean;
}

const PostSchema = new Schema({
    title:{
    type: String,
    required: true,
    },
    category:{
    type: String,
    required: true,
    },
    status:{   
    type:Boolean,
    required: true,
    },
    metaTitle:{
    type: String,
    required: true,
    },
    metaDescription:{
    type: String,
    required: true,
    },
    image:{
    type: String,
    }
});

export const Post = model<PostDocument>("Post", PostSchema);