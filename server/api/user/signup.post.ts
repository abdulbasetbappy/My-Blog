import { User } from "~/server/models/User";

import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.email || !body.username || !body.password) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(body.password, salt);
    const active = true;
  
    const user = await User.create({ ...body,  password: hasedPassword, active: active });
  
    return { ...user.toObject(), password: undefined,  success: true, message: "User created successfully"};
  } catch (error:any) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: error.message,
    });
  }
});