import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default () => {
  const { users } = useContext(UserContext);

  if (users === undefined || users.length === 0) return <></>;

  return (
    <div style={{ background: "grey", padding: 20, marginBottom: 5 }}>
      Last employee is{" "}
      <span
        dangerouslySetInnerHTML={{
          __html: `<strong>${users[users.length - 1].name}</strong>`,
        }}
      ></span>
    </div>
  );
};
