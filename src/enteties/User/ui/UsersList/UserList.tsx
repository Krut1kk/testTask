// react
import { useEffect, useState } from "react";
// api
import { useGetUsersQuery } from "../../api/userApi";
// ui
import { UserCard } from "../UserCard/UserCard";
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./UserList.module.scss";

export const UsersList = ({}) => {
  const [usersCount, setUsersCount] = useState(6);

  const [isUsersOver, setIsUsersOver] = useState(false);

  const { data, isLoading, error, isFetching } = useGetUsersQuery(usersCount);

  useEffect(() => {
    if (data && !isFetching) {
      if (usersCount > data?.count) {
        setIsUsersOver(true);
      }
    }
  }, [data, usersCount, isFetching]);

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  const onClickShowMore = () => {
    setUsersCount(usersCount + 6);
  };

  return (
    <div>
      <div className={styles.UsersList}>
        {data?.users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            email={user.email}
            name={user.name}
            photo={user.photo}
            phone={user.phone}
            position={user.position}
            positionId={user.positionId}
            registrationTimestamp={user.registrationTimestamp}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button onClick={onClickShowMore} disabled={isUsersOver}>
          Show more
        </Button>
        {isUsersOver && <div className={styles.over}>The Users is Over</div>}
      </div>
    </div>
  );
};
