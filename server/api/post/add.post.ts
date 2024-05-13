import { Post } from './../../models/post';

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        //destructures the body
        const { title, category, status, metaTitle, metaDescription, editorContent,imageData } = body;
        //creates a new post
        const post = await Post.create({
            title,
            category,
            status,
            metaTitle,
            metaDescription,
            editorContent,
            imageData,
        });

        if(!body.title || !body.category || !body.status || !body.metaTitle || !body.metaDescription || !body.editorContent){
            throw createError({
                statusCode: 400,
                statusMessage: "Bad Request",
                message: "Missing required fields",
            });
        }


        return { ...post.toObject(), success: true, message: "Category created successfully"};
    }catch(error:any){
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: error.message,
        });
    }
})