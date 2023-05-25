import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      // spread operator ...
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
