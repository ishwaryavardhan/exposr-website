"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
}

const BlurText: React.FC<BlurTextProps> = ({ 
  text = '', 
  delay = 200, 
  className = '', 
  animateBy = 'words' 
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: { filter: 'blur(0px)', opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: i * (delay / 1000) }}
          className="inline-block"
        >
          {el === ' ' ? '\u00A0' : el}
          {animateBy === 'words' && i !== elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
