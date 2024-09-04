import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import React from "react";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
