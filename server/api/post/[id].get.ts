
import { Post } from './../../models/post'; 


export default defineEventHandler(async(event)=>{
    	//Get id from params
        const id = (event.context.params as { id: string }).id;
try{
        // Find the book by ID and update its data
        const postDetails = await Post.findById(id);
        if (!postDetails) {
            // If no book with the given ID is found, return an error
            return { success: false, error: "Blog not found" };
        }

        // Return the updated book
        return { success: true, data: postDetails };
}catch (error: any) {
    // Handle any errors that occur during the update process
    return { success: false, error: error.message };
}
})