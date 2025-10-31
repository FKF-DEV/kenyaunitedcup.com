import { Hero } from "./section";

function Home() {
  return (
    <main
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(-45deg, #0a0a0a 0%, #111111 40%, #064e3b 75%, #7f1d1d 100%)",
      }}
    >
      {/* Background overlays removed for a cleaner, centered hero */}
      <Hero />
    </main>
  );
}

export default Home;
