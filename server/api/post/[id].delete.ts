//module
import { Post } from "../../models/post";

export default defineEventHandler(async(event)=>{
// Get data form body
const body = await readBody(event);
//Get id from params
const id = (event.context.params as { id: string }).id;
try {
    // Find the book by ID and update its data
    const deletedCategory = await Post.findByIdAndDelete(id, body);

    if (!deletedCategory) {
        // If no book with the given ID is found, return an error
        return { success: false, error: "Category not found" };
    }

    // Return the updated book
    return { success: true, data: deletedCategory };
} catch (error: any) {
    // Handle any errors that occur during the update process
    return { success: false, error: error.message };
}
})