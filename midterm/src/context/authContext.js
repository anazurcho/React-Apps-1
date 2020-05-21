import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login() {},
  logOut() {},
});

const AuthContextComponent = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    setIsAuth(true);
    const token = rand();
    localStorage.setItem("tokenuka:",token)
  };
  const logOutHandler = () => {
    setIsAuth(false);
    localStorage.setItem("tokenuka:",false)
  };
  const rand = () => {
      const rand1 = Math.random().toString(36).substr(2)
      const rand2 = Math.random().toString(36).substr(2)
      return rand1 + rand2
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        login() {
          loginHandler();
        },
        logOut() {
          logOutHandler();
        },
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
