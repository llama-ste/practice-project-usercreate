import React, { useState } from "react";
import styles from "./UserForm.module.css";
import Modal from "../Modal/Modal";

function UserForm({ onSaveUserData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userError, setUserError] = useState();
  function changeNameHandler(event) {
    setName(event.target.value);
  }

  function changeAgeHandler(event) {
    setAge(event.target.value);
  }

  function createUserHandler(event) {
    event.preventDefault();

    if (!name || !age || +age < 1) {
      setUserError(() => {
        if (!name || !age) {
          return "Please enter a valid name and age (non-empty values)";
        } else {
          return "Please enter a valid age (age > 0)";
        }
      });

      return;
    }

    const userData = {
      name,
      age,
      id: Math.random(),
    };

    onSaveUserData(userData);
    setName("");
    setAge("");
  }

  function errorHandler(error) {
    setUserError(error);
  }

  return (
    <form onSubmit={createUserHandler}>
      <div className={styles["user-form"]}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={name}
          type="text"
          onChange={changeNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={age} type="number" onChange={changeAgeHandler} />
      </div>
      <div className={styles["submit-btn"]}>
        <button type="submit">Add User</button>
      </div>
      {userError && <Modal errors={userError} onErrorReset={errorHandler} />}
    </form>
  );
}

export default UserForm;
