import { Hero } from "./section";

function Home() {
  return (
    <main
      className="overflow-hidden min-h-screen"
      style={{
        background:
          "linear-gradient(-45deg, #0a0a0a 0%, #111111 40%, #064e3b 75%, #7f1d1d 100%)",
      }}
    >
      <Hero />
    </main>
  );
}

export default Home;
