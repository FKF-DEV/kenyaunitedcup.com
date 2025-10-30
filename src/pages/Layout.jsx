import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer, NewsBanner, flags } from "../components";

function Layout() {
  const envShow = useMemo(
    () => String(import.meta.env.VITE_SHOW_MESSAGE_BAR || "").toLowerCase() === "true",
    []
  );
  const [showBanner, setShowBanner] = useState(envShow || flags.showMessageBar);
  return (
    <section className="w-screen">
      {showBanner && <NewsBanner />}
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold">Kenya United Cup</h1>
          <button
            type="button"
            className="text-xs md:text-sm px-3 py-1 rounded-full bg-black/50 text-white"
            onClick={() => setShowBanner((prev) => !prev)}
            aria-pressed={showBanner}
          >
            {showBanner ? "Hide updates" : "Show updates"}
          </button>
        </div>
      </header>
      <Outlet />
      <Footer />
    </section>
  );
}

export default Layout;
