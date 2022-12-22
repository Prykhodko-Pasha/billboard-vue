import { findUser, updateUser } from "../../prisma/users";
import isPasswordMatching from "../../helpers/isPasswordMatching";
import { createToken } from "../../helpers/tokenOperations";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("body auth PUT:>> ", body);
  // return { password: "YES", userData: "123" };
  try {
    // Fields validation
    // const { error } = joiSchemaUser.validate(req.body);
    // if (error)
    //   return res.status(400).json({
    //     message: error.details[0].message,
    //   });

    // Is password matching?
    const { email, password } = body;
    const user = await findUser(email);
    console.log("user AUTH:>> ", user);
    if (!user || !isPasswordMatching(password, user.password))
      throw createError({
        statusCode: 401,
        statusMessage: "Email or password is wrong",
      });

    // Create a token
    const { id, ...userData } = user;
    const updateData = { ...userData, token: createToken(id) };
    const loginedUser = await updateUser(id, updateData);
    console.log("loginedUser :>> ", loginedUser);
    return loginedUser;
  } catch (error) {
    throw createError({
      statusCode: error.status,
      statusMessage: error.message,
    });
  }
});
