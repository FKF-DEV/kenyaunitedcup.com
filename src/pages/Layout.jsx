import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, NewsBanner } from "../components";

function Layout() {
  return (
    <section className="w-screen">
      <NewsBanner />
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-extrabold">Kenya United Cup</h1>
        </div>
      </header>
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
