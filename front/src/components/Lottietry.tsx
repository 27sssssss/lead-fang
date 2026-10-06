import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "./Pre-comp 1.json";

export default function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=" relative bottom-[120%]"
    />
  );
}