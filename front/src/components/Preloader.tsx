import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../assets/tiger (transparent bg).json";

const FADE_MS = 300;
const EARLY_FRAMES = 30

// полноэкранная заставка: тигр проигрывается один раз, после чего (и после загрузки страницы) плавно исчезает
export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let timeout: ReturnType<typeof setTimeout>;
    const hide = () => {
      setHiding(true);
      timeout = setTimeout(() => setDone(true), FADE_MS);
    };

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData,
    });

    let started = false;
    animation.addEventListener("enterFrame", () => {
      if (started || animation.currentFrame < animation.totalFrames - EARLY_FRAMES) return;
      started = true;
      if (document.readyState === "complete") hide();
      else window.addEventListener("load", hide, { once: true });
    });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("load", hide);
      animation.destroy();
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-[#181716] transition-opacity ease-out ${
        hiding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div ref={containerRef} className="w-[100vw] max-md:w-[400vw] max-md:shrink-0" />
    </div>
  );
}
