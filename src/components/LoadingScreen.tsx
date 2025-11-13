import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minLoadingTime?: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  minLoadingTime = 2000,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let videoLoaded = false;
    let fontsLoaded = false;
    let minTimeElapsed = false;

    // Simular progreso inicial
    setProgress(10);

    // Verificar fuentes
    if (document.fonts.status === "loaded") {
      fontsLoaded = true;
      setProgress((prev) => prev + 30);
    } else {
      document.fonts.ready.then(() => {
        fontsLoaded = true;
        setProgress((prev) => prev + 30);
        checkComplete();
      });
    }

    // Verificar video
    const video = document.querySelector("video");
    if (video) {
      if (video.readyState >= 3) {
        videoLoaded = true;
        setProgress((prev) => prev + 40);
        checkComplete();
      } else {
        video.addEventListener(
          "canplaythrough",
          () => {
            videoLoaded = true;
            setProgress((prev) => prev + 40);
            checkComplete();
          },
          { once: true }
        );
      }
    } else {
      videoLoaded = true;
      setProgress((prev) => prev + 40);
    }

    // Tiempo mínimo
    setTimeout(() => {
      minTimeElapsed = true;
      setProgress((prev) => prev + 20);
      checkComplete();
    }, minLoadingTime);

    function checkComplete() {
      const elapsed = Date.now() - startTime;
      if (
        videoLoaded &&
        fontsLoaded &&
        (elapsed >= minLoadingTime || minTimeElapsed)
      ) {
        setProgress(100);
        setTimeout(() => {
          onLoadingComplete();
        }, 300);
      }
    }

    checkComplete();
  }, [onLoadingComplete, minLoadingTime]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="text-center">
        <h1
          className="text-5xl md:text-7xl text-white mb-8"
          style={{ fontFamily: "Aerosoldier, sans-serif" }}
        >
          CRAZY
        </h1>

        {/* Barra de progreso */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-400 mt-4 text-sm">
          {progress < 100 ? "Cargando..." : "Listo"}
        </p>
      </div>
    </div>
  );
}
