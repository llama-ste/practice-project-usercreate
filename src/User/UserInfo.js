import React from "react";
import styles from "./UserInfo.module.css";
import Card from "../UI/Card";

function UserInfo({ users }) {
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

export default UserInfo;
