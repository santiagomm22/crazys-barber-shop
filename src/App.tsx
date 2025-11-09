import { useState } from "react";
import AnimatedText from "./components/AnimatedText";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    // Fade out del loading
    setIsLoading(false);
    // Mostrar contenido después del fade out
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <>
      <video className="video-background" autoPlay loop muted playsInline>
        <source src="/krumzi-video.mp4" type="video/mp4" />
      </video>

      {/* Loading Screen con fade out */}
      {isLoading && (
        <div
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Contenido principal con fade in */}
      {showContent && (
        <div className="min-h-screen flex items-center justify-center animate-fadeIn">
          <AnimatedText />
        </div>
      )}
    </>
  );
}

export default App;
