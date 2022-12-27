import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

const user = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
const logi = localStorage.getItem("login")
  ? JSON.parse(localStorage.getItem("login"))
  : {};
const loginnedUser = localStorage.getItem("loginnedUsers")
  ? JSON.parse(localStorage.getItem("loginnedUsers"))
  : [];

const p = localStorage.getItem("posts")
  ? JSON.parse(localStorage.getItem("posts"))
  : [{}];

function AuthProvider({ children }) {
  const users = user;
  const login = logi;
  const [isLogin, setIsLogin] = useState(false);
  const [loginnedUsers, setLoginnedUsers] = useState(loginnedUser);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [loginnedUserr, setLoginnedUserr] = useState({
    name: "",
    surname: "",
  });
  const [pages, setPages] = useState("Main");
  const [profilePages, setProfilePages] = useState("Pr");
  const [posts, setPosts] = useState(p);

  localStorage.setItem("loginnedUsers", JSON.stringify(loginnedUsers));
  localStorage.setItem("login", JSON.stringify(login));
  localStorage.setItem("posts", JSON.stringify(posts));

  console.log("isLogin", isLogin);
  console.log("users", users);
  console.log("login", login);
  console.log("loginnedUsers", loginnedUsers);
  console.log("loginnedUserr", loginnedUserr);
  console.log("posts", posts);

  const values = {
    users,
    login,
    isLogin,
    setIsLogin,
    loginnedUsers,
    setLoginnedUsers,
    emailValidation,
    setEmailValidation,
    passwordValidation,
    setPasswordValidation,
    loginnedUserr,
    setLoginnedUserr,
    pages,
    setPages,
    profilePages,
    setProfilePages,
    posts,
    setPosts,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
