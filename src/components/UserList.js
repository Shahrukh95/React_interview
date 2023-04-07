import { memo, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default () => {
  const { users, setUsers } = useContext(UserContext);

  window.submitForm = (name) => {
    alert("Submiting form for " + name);
    setUsers((prevState) => {
      let copyPrevState = [...prevState];
      copyPrevState[copyPrevState.length - 1].name += " (*)"; // mark the previous employee
      copyPrevState.push({ name: name });
      return copyPrevState;
    });
  };

  if (users === undefined || users.length === 0) return <></>;

  return (
    <div style={{ background: "yellow", marginTop: 5 }}>
      <h4 style={{ margin: 0, marginBottom: 20, textDecoration: "underline" }}>List of users</h4>
      <div>{users !== undefined ? users.map((d, index) => <Name data={d} key={index} />) : null}</div>
    </div>
  );
};

export const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});
