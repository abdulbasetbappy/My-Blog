import { Post } from '~/server/models/post';


export default defineEventHandler(async(event)=>{
    // Get data form body
	const body = await readBody(event);
	//Get id from params
    const id = (event.context.params as { id: string }).id;
    try {


        // Find the Category by ID and update its data
        const updatedCategory = await Post.findByIdAndUpdate(id, body, { new: true });

        if (!updatedCategory) {
            // If no Category with the given ID is found, return an error
            return { success: false, error: "Category not found" };
        }

        // Return the updated Category
        return { success: true, data: updatedCategory };
    } catch (error: any) {
        // Handle any errors that occur during the update process
        return { success: false, error: error.message };
    }
})