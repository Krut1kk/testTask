// react
import { FC } from "react";
// types
import { User } from "../../model/types/user";
// styles
import styles from "./UserCard.module.scss";

interface UserCardProps extends User {}

export const UserCard: FC<UserCardProps> = ({
  name,
  email,
  phone,
  position,
  photo,
}) => {
  return (
    <div className={styles.UserCard}>
      <div className={styles.mainInfoContainer}>
        <img className={styles.photo} src={photo} alt={name} />
      </div>
      <div>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.additionalInfoContainer}>
        <div className={styles.position}>{position}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.phone}>{phone}</div>
      </div>
    </div>
  );
};
