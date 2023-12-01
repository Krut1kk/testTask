// ui
import { UsersList } from "@/enteties/User";

// styles
import styles from "./UsersBlock.module.scss";

export const UsersBlock = () => {
  return (
    <div className={styles.UsersBlock}>
      <div className={styles.title}>Working with GET request</div>
      <div>
        <UsersList />
      </div>
    </div>
  );
};
