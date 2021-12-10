import React from "react";
import styles from "./UserInput.module.css";
import UserForm from "./UserForm";
import Card from "../UI/Card";

function UserInput({ onAddUser }) {
  function saveUserDataHandler(enteredUserData) {
    onAddUser(enteredUserData);
  }
  return (
    <Card className={styles["user-input"]}>
      <UserForm onSaveUserData={saveUserDataHandler} />
    </Card>
  );
}

export default UserInput;
