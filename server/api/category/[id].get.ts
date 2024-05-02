import { Category } from "~/server/models/category";


export default defineEventHandler(async(event)=>{
    	//Get id from params
        const id = (event.context.params as { id: string }).id;
try{
        // Find the book by ID and update its data
        const categoryDetails = await Category.findByIdAndUpdate(id);
        if (!categoryDetails) {
            // If no book with the given ID is found, return an error
            return { success: false, error: "Book not found" };
        }

        // Return the updated book
        return { success: true, data: categoryDetails };
}catch (error: any) {
    // Handle any errors that occur during the update process
    return { success: false, error: error.message };
}
})