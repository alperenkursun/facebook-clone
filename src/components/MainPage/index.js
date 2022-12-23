import React from "react";
import Navbar from "../Navbar";
import Contacts from "./Contacts";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Contacts />
    </>
  );
}

export default MainPage;
