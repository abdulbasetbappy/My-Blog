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
    type: Array,
    required: true,
    },
    status:{   
    type:Object,
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
    type: File,
    }
});

export const Post = model<PostDocument>("Post", PostSchema);