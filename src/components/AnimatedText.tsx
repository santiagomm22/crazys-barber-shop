import SplitText from "./SplitText";

export default function AnimatedText() {
  return (
    <div className="animated-text-wrapper w-full h-screen flex items-start justify-center p-4 md:justify-start md:items-center">
      <div className="w-full h-auto pt-8 md:w-1/2 md:h-full md:flex md:items-center md:justify-center md:scale-95">
        <SplitText
          text="THE CRAZY'S BARBERSHOP"
          className="text-white text-center animated-title"
          style={{ fontFamily: "Aerosoldier, sans-serif" }}
          tag="h1"
          delay={70}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </div>
  );
}
