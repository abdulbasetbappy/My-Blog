import { User } from '~/server/models/User';

export default defineEventHandler(async (event) => {
  // Get data from body
  const body = await readBody(event);

  // Get id from params
  const id = (event.context.params as { id: string }).id;

  if (!body || body.active === undefined) {
    throw new Error('Request body or active property is undefined');
  }

  try {
    // Find the user & update active status
    const UpdatedUser = await User.findByIdAndUpdate(id, { active: body.active }, { new: true });
    if (!UpdatedUser) {
      // If no user with the given ID is found, return an error
      return { success: false, error: "User not found" };
    }
    return { success: true, data: UpdatedUser };
  } catch (error) {
    // Handle any errors that occur during the update process
    return { success: false, error: error.message };
  }
});
