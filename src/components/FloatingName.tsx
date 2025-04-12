// components/FloatingName.tsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function FloatingName({ isVisible }: { isVisible: boolean }) {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        top: '90vh', // Move to second section
        left: '8vw',
        scale: 0.8,
        transition: { duration: 0.6, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        top: '20vh', // Original position in landing section
        left: '7vw',
        scale: 1,
        transition: { duration: 0.6, ease: 'easeInOut' },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ top: '20vh', left: '7vw', position: 'fixed', zIndex: 50 }}
      className="font-alro-reg text-8xl text-white pointer-events-none"
    >
      Emem Olushola
    </motion.div>
  );
}
