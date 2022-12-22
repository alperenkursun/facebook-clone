import "./App.css";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import MainProfile from "./components/MainProfile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./components/Sidebar2";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Navbar />
      <Sidebar2 />
      <MainProfile />
      {/* <Sidebar /> */}
      {/* <MainContent />
      <Contacts /> */}
    </div>
  );
}

export default App;
