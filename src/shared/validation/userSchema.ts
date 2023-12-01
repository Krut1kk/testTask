import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "min value 2")
    .max(60, "max value 60")
    .required("required"),
});
