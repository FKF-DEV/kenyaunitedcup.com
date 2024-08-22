import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, Navbar, NewsBanner } from "../components";

function Layout() {
  return (
    <section className="w-screen">
      <NewsBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
