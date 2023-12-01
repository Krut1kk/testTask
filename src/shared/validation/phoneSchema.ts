import * as yup from "yup";

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^[\+]{0,1}380([0-9]{9})$/, {
      message: "Invalid phone number",
    })
    .required("Phone number is required"),
});
