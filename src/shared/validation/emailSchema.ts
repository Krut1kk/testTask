import * as yup from "yup";

export const emailValidationSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
});
