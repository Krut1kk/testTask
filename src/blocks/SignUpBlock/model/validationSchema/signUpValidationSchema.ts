import * as yup from "yup";
// validation schemas
import { userValidationSchema } from "@/shared/validation/userSchema";
import { emailValidationSchema } from "@/shared/validation/emailSchema";
import { phoneValidationSchema } from "@/shared/validation/phoneSchema";

export const signUpValidationSchema = yup.object().shape({
  username: userValidationSchema.fields.username,
  email: emailValidationSchema.fields.email,
  phone: phoneValidationSchema.fields.phone,
});
