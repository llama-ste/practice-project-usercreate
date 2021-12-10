import React, { useState } from "react";
import "./App.css";
import UserInput from "./NewUser/UserInput";
import UserInfo from "./User/UserInfo";

function App() {
  const [users, setUsers] = useState([]);
  const [userCheck, setUserCheck] = useState(true);
  function addUserHandler(user) {
    setUsers((users) => {
      return [user, ...users];
    });
    setUserCheck(false);
  }

  return (
    <div className="App">
      <UserInput onAddUser={addUserHandler} />
      {!userCheck && <UserInfo users={users} />}
    </div>
  );
}

export default App;
