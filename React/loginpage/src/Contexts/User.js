import React, { createContext } from "react";
import UseInfo from "../Hooks/UseInfo";

const UserContext = createContext({
  state: { id: "", password: "" },
  action: { onSetId: () => {}, onSetPassword: () => {} },
});

const UserProvider = ({ children }) => {
  const [id, onSetId] = UseInfo("");
  const [password, onSetPassword] = UseInfo("");

  const value = {
    state: { id, password },
    action: { onSetId, onSetPassword },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
