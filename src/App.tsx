import AnimatedText from "./components/AnimatedText";

function App() {
  return (
    <>
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/krumzi-video.mp4" type="video/mp4" />
      </video>
      <div className="min-h-screen flex items-center justify-center">
        <AnimatedText />
      </div>
    </>
  );
}

export default App;
