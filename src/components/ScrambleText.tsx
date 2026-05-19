import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '@/src/lib/utils';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

interface ScrambleTextProps {
  text: string;
  className?: string;
  revealSpeed?: number; // 1.0 is default, higher is faster/shorter
}

export default function ScrambleText({ text, className, revealSpeed = 1 }: ScrambleTextProps) {
  const [chars, setChars] = useState(() => 
    text.split('').map(c => ({ char: c, isScrambling: false, isHighlighted: false }))
  );
  const timeoutsRef = useRef<number[]>([]);
  const isHovered = useRef(false);

  useEffect(() => {
    setChars(text.split('').map(c => ({ char: c, isScrambling: false, isHighlighted: false })));
  }, [text]);

  const scrambleIndex = useCallback((index: number) => {
    if (text[index] === ' ') return;

    // Start scrambling this specific character
    setChars(prev => {
      const next = [...prev];
      if (!next[index]) return prev;
      next[index] = { 
        ...next[index],
        char: CHARS[Math.floor(Math.random() * CHARS.length)], 
        isScrambling: true 
      };
      return next;
    });

    let iterations = 0;
    // Scale iterations by inv speed. Higher speed = fewer iterations.
    const baseIterations = 8 + Math.floor(Math.random() * 6);
    const maxIterations = Math.max(1, Math.floor(baseIterations / revealSpeed));
    
    const intervalDelay = Math.max(10, Math.floor(30 / revealSpeed));

    const interval = window.setInterval(() => {
      setChars(prev => {
        const next = [...prev];
        if (!next[index]) return prev;
        next[index] = { 
          ...next[index],
          char: CHARS[Math.floor(Math.random() * CHARS.length)], 
          isScrambling: true 
        };
        return next;
      });

      iterations++;
      if (iterations >= maxIterations) {
        window.clearInterval(interval);
        setChars(prev => {
          const next = [...prev];
          if (!next[index]) return prev;
          next[index] = { ...next[index], char: text[index], isScrambling: false, isHighlighted: true };
          return next;
        });

        // After 2 seconds, remove the high contrast highlight
        const highlightTimeout = window.setTimeout(() => {
          setChars(prev => {
            const next = [...prev];
            if (!next[index]) return prev;
            next[index] = { ...next[index], isHighlighted: false };
            return next;
          });
        }, 2000);
        timeoutsRef.current.push(highlightTimeout);
      }
    }, intervalDelay);

    timeoutsRef.current.push(interval);
  }, [text, revealSpeed]);

  const startGlitchEffect = () => {
    if (isHovered.current) return;
    isHovered.current = true;
    
    timeoutsRef.current.forEach(window.clearTimeout);
    timeoutsRef.current.forEach(window.clearInterval);
    timeoutsRef.current = [];

    const indices = Array.from({ length: text.length }, (_, i) => i)
      .filter(i => text[i] !== ' ')
      .sort(() => Math.random() - 0.5);

    const burstDelay = Math.max(5, Math.floor(15 / revealSpeed));

    // One-cycle burst
    indices.forEach((idx, i) => {
      const timeout = window.setTimeout(() => {
        scrambleIndex(idx);
      }, i * burstDelay);
      timeoutsRef.current.push(timeout);
    });
  };

  const stopGlitchEffect = () => {
    isHovered.current = false;
  };

  return (
    <span 
      className={cn("cursor-default", className)}
      onMouseEnter={startGlitchEffect}
      onMouseLeave={stopGlitchEffect}
    >
      {chars.map((item, i) => (
        <span 
          key={i} 
          className={cn(
            "transition-colors duration-200",
            item.isScrambling ? "text-yellow-400" : "",
            item.isHighlighted ? "text-[#298DFF] font-bold brightness-125" : ""
          )}
        >
          {item.char}
        </span>
      ))}
    </span>
  );
}
