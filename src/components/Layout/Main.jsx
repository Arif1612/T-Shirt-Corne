import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ToastContainer} from "react-toastify";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
