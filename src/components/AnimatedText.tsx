import SplitText from "./SplitText";

export default function AnimatedText() {
  return (
    <div
      className="animated-text-wrapper w-full h-screen flex justify-center p-4"
      style={{ paddingTop: "10vh", alignItems: "flex-start" }}
    >
      <div className="w-full h-auto">
        <h1
          className="text-white text-center animated-title"
          style={{
            fontFamily: "Aerosoldier, sans-serif",
            lineHeight: "1.1",
          }}
        >
          <SplitText
            text="THE"
            className="block text-white text-center"
            style={{
              fontFamily: "Aerosoldier, sans-serif",
              display: "block",
              marginBottom: "-0.5rem",
            }}
            tag="span"
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
          <SplitText
            text="CRAZY BARBERSHOP"
            className="block text-white text-center animated-title"
            style={{
              fontFamily: "Aerosoldier, sans-serif",
              display: "block",
            }}
            tag="span"
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
        </h1>
      </div>
    </div>
  );
}
