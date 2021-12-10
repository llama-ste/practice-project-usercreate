import React, { useState } from "react";
import styles from "./UserForm.module.css";

function UserForm({ onSaveUserData }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function changeNameHandler(event) {
    setName(event.target.value);
  }
  function changeAgeHandler(event) {
    setAge(event.target.value);
  }
  function createUserHandler(event) {
    event.preventDefault();
    if ((age && name) === "" || age < 1) {
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

  return (
    <form onSubmit={createUserHandler}>
      <div className={styles["user-form"]}>
        <label>Username</label>
        <input value={name} type="text" onChange={changeNameHandler} />
        <label>Age (Years)</label>
        <input value={age} type="number" onChange={changeAgeHandler} />
      </div>
      <div className={styles["submit-btn"]}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default UserForm;
