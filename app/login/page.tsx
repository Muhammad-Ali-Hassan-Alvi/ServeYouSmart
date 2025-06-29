import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Login />
      </div>
    </>
  );
};

export default page;
