import { Category } from "~/server/models/category";

export default defineEventHandler (async()=>{
    try{
        const categories = await Category.find({});
        return categories;
    }catch(error:any){
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: error.message,
        });
    }
})