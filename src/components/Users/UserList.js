import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";

function UserList({ users }) {
  return (
    <Card>
      <div className={styles["user-list"]}>
        {users.map((user) => {
          return (
            <p
              key={user.id}
              className={styles["user-info"]}
            >{`${user.name} (${user.age} years old)`}</p>
          );
        })}
      </div>
    </Card>
  );
}

export default UserList;
