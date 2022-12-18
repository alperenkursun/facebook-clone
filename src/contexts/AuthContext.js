import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const user = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
const logi = localStorage.getItem("login")
  ? JSON.parse(localStorage.getItem("login"))
  : {};
// const isLogi = localStorage.getItem("isLogin")
//   ? JSON.parse(localStorage.getItem("isLogin"))
//   : false;

function AuthProvider({ children }) {
  const users = user;
  const [login, setLogin] = useState(logi);
  const [isLogin, setIsLogin] = useState(false);

  localStorage.setItem("login", JSON.stringify(login));
  // localStorage.setItem("isLogin", JSON.stringify(isLogin));

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === login.email &&
      users[i].password === login.password
    ) {
      console.log("giriş yapıldı");
      // setIsLogin(true);
    }
  }
  console.log("users", users);
  console.log("login", login);

  const values = {
    users,
    login,
    setLogin,
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
