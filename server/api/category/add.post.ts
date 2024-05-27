import { Category } from "~/server/models/category";

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
        const category = await Category.create({ ...body });

        return { ...category.toObject(), success: true, status:200, message: "Category created successfully"};
    }catch(error:any){
        throw createError({
            statusCode: 500,
            statusMessage: "Internal Server Error",
            message: error.message,
        });
    }
})