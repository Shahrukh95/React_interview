import { AddNewUser } from "./components/addnewuser";
import Header from "./components/Header";
import USERLIST from "./components/UserList";
import "./styles.css";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

export default function App() {
  // FETCH USERS ONLY ONCE
  const [users, setUsers] = useState(() => {
    (async () => {
      return new Promise((res) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((foo) => {
          foo.json().then((bar) => {
            console.log("test");
            setUsers(bar);
            res();
          });
        });
      });
    })();
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ users, setUsers }}>
        <div>
          {/* RECEIVES ONLY USERS */}
          <Header />
        </div>

        <div>
          {/* UNAFFECTED BY CONTEXT API */}
          <AddNewUser />
        </div>
        <div>
          {/* RECEIVES FULL STATE */}
          <USERLIST />
        </div>
      </UserContext.Provider>
    </div>
  );
}
