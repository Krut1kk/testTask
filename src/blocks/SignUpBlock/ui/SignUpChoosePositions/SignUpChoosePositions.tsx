// react
import { FC } from "react";
// ui
import { RadioButton } from "@/shared/ui/RadioButton/RadioButton";
// types
import { Position } from "@/features/signUp/model/types/signUp";
// styles
import styles from "./SignUpChoosePositions.module.scss";

interface SignUpChoosePositionsProps {
  positions: Position[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SignUpChoosePositions: FC<SignUpChoosePositionsProps> = ({
  positions,
  onChange,
}) => {
  return (
    <div className={styles.SignUpChoosePositions}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Select Your Position
      </div>
      <div className={styles.radioButtons}>
        {positions.map((position) => (
          <RadioButton
            key={position.id}
            id={position.id}
            name={position.name}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};
