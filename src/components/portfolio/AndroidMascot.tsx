import { useEffect, useState } from "react";

const AndroidMascot = () => {
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => setWaving(true), 600);
    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!waving) return;
    const resetTimer = setTimeout(() => {
      setWaving(false);
      const nextWave = setTimeout(() => setWaving(true), 5000);
      (resetTimer as unknown as { __next?: ReturnType<typeof setTimeout> }).__next = nextWave;
    }, 2100);
    return () => {
      clearTimeout(resetTimer);
      const next = (resetTimer as unknown as { __next?: ReturnType<typeof setTimeout> }).__next;
      if (next) clearTimeout(next);
    };
  }, [waving]);

  return (
    <div
      className="android-mascot-wrapper relative hidden md:block min-w-[200px] lg:min-w-[240px] xl:min-w-[280px] min-h-[320px] lg:min-h-[360px] xl:min-h-[400px] w-56 lg:w-72 xl:w-80 overflow-visible flex-shrink-0 md:mr-[calc(-3rem-max(0px,(100vw-75rem)/2))] origin-[100%_30%]"
      style={{ transform: "scale(1.2) rotate(-45deg) translate(12%, 3%)" }}
    >
      <svg
        className="android-svg h-full w-full animate-fade-in-up overflow-visible"
        style={{ animationDelay: "400ms" }}
        viewBox="0 0 255 275"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <style>{`.android-fill { fill: #3DDC84; }`}</style>
        <g className="mascot-head">
          <path className="android-fill" d="M95,95 A60,60 0 0,1 215,95 Z" />
          <circle fill="#0B0D10" cx="130" cy="70" r="5" />
          <circle fill="#0B0D10" cx="180" cy="70" r="5" />
          <line x1="125" y1="45" x2="110" y2="30" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
          <line x1="185" y1="45" x2="200" y2="30" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
        </g>

        <rect
          className="mascot-body android-fill"
          x="95"
          y="100"
          width="120"
          height="100"
          rx="0"
          ry="0"
          style={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}
        />

        {/* Left arm – waving */}
        <g
          className={`mascot-left-arm ${waving ? "animate-mascot-wave" : ""}`}
          style={{
            transformOrigin: "77.5px 100px",
            transition: !waving ? "transform 0.25s ease-out" : undefined,
          }}
        >
          <rect className="android-fill" x="65" y="100" width="25" height="70" rx="12" />
        </g>

        <rect className="mascot-body android-fill" x="220" y="100" width="25" height="70" rx="12" />
        <rect className="mascot-body android-fill" x="115" y="205" width="25" height="70" rx="10" />
        <rect className="mascot-body android-fill" x="170" y="205" width="25" height="70" rx="10" />
      </svg>
    </div>
  );
};

export default AndroidMascot;
