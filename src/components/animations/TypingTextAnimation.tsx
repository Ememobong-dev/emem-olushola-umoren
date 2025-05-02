'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  sound?: string;
}

export const TypingText = ({
  text,
  className,
  delay = 100,
  sound,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load sound once
  useEffect(() => {
    if (sound) {
      audioRef.current = new Audio(sound);
      audioRef.current.volume = 0.5;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [sound]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let isCancelled = false;

    // Reset state when text changes
    setDisplayedText('');
    setIsTypingDone(false);

    const typeNextChar = () => {
      if (isCancelled || currentIndex >= text.length) {
        setIsTypingDone(true);
        return;
      }

      const nextChar = text[currentIndex];
      setDisplayedText((prev) => prev + nextChar);

      if (audioRef.current && nextChar !== ' ') {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      currentIndex++;
      setTimeout(typeNextChar, delay);
    };

    typeNextChar();

    return () => {
      isCancelled = true;
    };
  }, [text, delay]);

  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      {!isTypingDone && <span className="blinking-cursor">|</span>}
    </motion.h2>
  );
};
