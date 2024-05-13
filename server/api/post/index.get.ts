import { Post } from './../../models/post';


export default defineEventHandler (async()=>{
    try{
        const categories = await Post.find({});
        return categories;
    }catch(error:any){
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: error.message,
        });
    }
})