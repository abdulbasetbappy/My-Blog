import { Post } from "~/server/models/Post";

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);

        if(!body.categoryName){
            throw createError({
                statusCode: 400,
                statusMessage: "Bad Request",
                message: "Missing required fields",
            });
        }
        const category = await Post.create({ ...body });

        return { ...category.toObject(), success: true, message: "Post created successfully"};
    }catch(error:any){
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: error.message,
        });
    }
})