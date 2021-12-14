import React, { useState } from "react";
import "./App.css";
import UserInput from "./components/NewUser/UserInput";
import UserList from "./components/Users/UserList";

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
      {!userCheck && <UserList users={users} />}
    </div>
  );
}

export default App;
