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
    type:String,
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
    editorContent:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    views:{
        type: Number,
        default: 0,
    },
    imageData: {
        type: String,
        required: true
    }
});

export const Post = model<PostDocument>("Post", PostSchema);