import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
};

export default function TypingText({
  text,
  speed = 120,
  pause = 2000,
  className = "",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: number | undefined;

    const tick = () => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index += 1;

        if (index > text.length) {
          timeoutId = window.setTimeout(() => {
            setDisplayText("");
            index = 0;
            tick();
          }, pause);
          return;
        }
      }

      timeoutId = window.setTimeout(tick, speed);
    };

    tick();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, pause]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 animate-pulse bg-current align-middle" />
    </span>
  );
}