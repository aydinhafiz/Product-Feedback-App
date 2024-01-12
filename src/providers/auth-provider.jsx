import React, { useState } from "react";
import { AuthContext } from "../contexts/auth-context";
import { useEffect } from "react";

function AuthProvider(props) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  function handleLoginState(token, user) {
    setToken(token);
    setUser(user);
    localStorage.setItem("authObj", JSON.stringify({ token, user }));
  }
  function handleLogoutState() {
    setToken("");
    setUser(null);
    localStorage.removeItem("authObj");
  }

  useEffect(() => {
    const authObjString = localStorage.getItem("authObj");
    if (authObjString) {
      const authObj = JSON.parse(authObjString);
      if (authObj) {
        handleLoginState(authObj.token, authObj.user);
      }
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        handleLoginState,
        handleLogoutState,
        token,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
