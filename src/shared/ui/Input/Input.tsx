// react
import { FC } from "react";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  register: any;
  errors: string | undefined;
}

export const Input: FC<InputProps> = ({ placeholder, register, errors }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={`${styles.Input}  ${errors && styles.inputError} `}
        {...register}
      />
      {errors && <p className={styles.errorMessage}>{errors}</p>}
    </div>
  );
};
