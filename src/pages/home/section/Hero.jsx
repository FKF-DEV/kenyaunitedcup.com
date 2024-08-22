import { Carousel } from "@material-tailwind/react";
import { HeroCard } from "../../../components";

function Hero() {
  return (
    // <section className="border border-red-500 mx-auto max-w-7xl">
    <Carousel
      className="relative w-full max-w-7xl mx-auto overflow-hidden h-96 md:h-[680px] py-8"
      prevArrow={() => {}}
      nextArrow={() => {}}
      autoplay
      autoplayDelay={5000}
      transition={{
        type: "tween",
        duration: 1,
      }}
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 sm:bottom-12 md:bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 cursor-pointer rounded-full transition-all content-[''] bg-gradient-to-br ${
                activeIndex === i
                  ? "w-8 from-[#E41C23] to-[#116937]"
                  : "w-4 from-[#E41C23]/30 to-[#116937]/30"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <HeroCard key={i} />
      ))}
    </Carousel>
    // </section>
  );
}

export default Hero;
