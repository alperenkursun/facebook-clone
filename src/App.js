import "./App.css";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Navbar />
      <Sidebar />
      <MainContent />
      <Contacts />
    </div>
  );
}

export default App;
