import React from "react";
import MainProfile from "./MainProfile";
import Navbar from "../Navbar";
import Sidebar2 from "./MainProfile/Sidebar2";

function ProfilePage() {
  return (
    <>
      <Navbar />
      <Sidebar2 />
      <MainProfile />
    </>
  );
}

export default ProfilePage;
