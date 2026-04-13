import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 125);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black scanlines">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(112,255,0,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(112,255,0,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }} />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Company name */}
        <h1 className="font-pixel text-2xl md:text-4xl tracking-wider" style={{ color: '#70ff00', textShadow: '0 0 20px #70ff00, 0 0 40px #70ff0066' }}>
          LIETHUEIS
        </h1>
        <p className="font-pixel text-xs md:text-sm tracking-widest" style={{ color: '#f500ff', textShadow: '0 0 10px #f500ff' }}>
          FOUNDATION
        </p>

        {/* Loading bar */}
        <div className="w-64 md:w-80 mt-8">
          <div className="h-6 border-4 border-neon-green bg-black relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
            <div
              className="h-full transition-none"
              style={{
                width: `${progress}%`,
                background: `repeating-linear-gradient(90deg, #f500ff 0px, #f500ff 10px, transparent 10px, transparent 14px)`,
              }}
            />
          </div>
          <p className="font-pixel text-[10px] mt-2 text-center" style={{ color: '#70ff00' }}>
            LOADING... {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
