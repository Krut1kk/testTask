import { ReactNode, FC } from "react";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles.Button}
    >
      {children}
    </button>
  );
};
