// import { updateUser } from "../../prisma/users";
// import { verifyToken } from "../../helpers/tokenOperations";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   // console.log("body :>> ", body);
//   try {
//     // Fields validation
//     // const { error } = joiSchemaUser.validate(req.body);
//     // if (error)
//     //   return res.status(400).json({
//     //     message: error.details[0].message,
//     //   });

//     // Token verifying and updating
//     // console.log("req api auth:>> ", req);
//     const { id, ...userData } = await verifyToken(body);
//     const updateData = { ...userData, token: null };
//     await updateUser(id, updateData);
//     return updateData;
//   } catch (error) {
//     return "Error auth PATCH";
//   }
// });
