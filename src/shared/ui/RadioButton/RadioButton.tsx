// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
  id: number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({ id, name, onChange }) => {
  return (
    <div key={id}>
      <input
        className={styles.RadioButton}
        type="radio"
        name="position"
        value={name}
        id={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};
