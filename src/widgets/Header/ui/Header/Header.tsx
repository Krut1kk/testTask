// ui
import { Button } from "@/shared/ui/Button";
// assets
import Logo from "@/shared/libs/assets/svg/logo.svg?react";
// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return (
    <div className={styles.Header}>
      <div>
        <Logo />
      </div>
      <div className={styles.right}>
        <Button>Users</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};
