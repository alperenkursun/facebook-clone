import "./App.css";
import ProfilePage from "./components/ProfilePage";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isLogin, pages } = useAuth();

  return (
    <div className="app">
      {isLogin === false && <Login />}
      {isLogin === true && pages === "Main" && <MainPage />}
      {isLogin === true && pages === "Profile" && <ProfilePage />}
    </div>
  );
}

export default App;
