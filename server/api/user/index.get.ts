import { User } from '~/server/models/User';

export default defineEventHandler( async () => {
    try{
    //Return All Users
    const users = await User.find({}, { password: 0 });;
    return users;
    } catch (err) {
        console.error(err);
        return new Error('An error occurred while fetching users');
    }
})