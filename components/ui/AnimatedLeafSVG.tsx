import { motion } from 'framer-motion';
import SVGProps  from 'react';


interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }

  interface AnimatedLeafSVGProps extends SVGProps {
    size?: number; // Allow varying sizes
    fallDuration?: number; // Allow varying fall speeds
    swayRange?: number; // Allow varying sway range
  }
  
  const AnimatedLeafSVG: React.FC<AnimatedLeafSVGProps> = ({
    style,
    className,
    size = 70,
    fallDuration = 5,
    swayRange = 20,
  }) => (
    <motion.svg
      className={`absolute opacity-80 ${className}`}
      style={{ ...style, originX: '50%', originY: '50%' }}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      initial={{ y: '-100%', opacity: 1, scale: 0.8 }}
      animate={{
        y: '90vh', // Fall to near the bottom
        x: [0, swayRange, -swayRange, swayRange / 2, 0], // More organic swaying path
        rotate: [0, 180], // Slower, more natural rotation
        scale: [0.8, 1, 0.8], // Slight scale change for depth
        opacity: [1, 1, 0], // Fade out as it reaches the ground
      }}
      transition={{
        y: {
          duration: fallDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeIn', // Slower at the start, faster at the end
        },
        x: {
          duration: fallDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
        rotate: {
          duration: fallDuration * 2, // Slower rotation
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
        scale: {
          duration: fallDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
        opacity: {
          duration: fallDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      }}
    >
      {/* Leaf Body */}
      <path
        d="M50 20 C70 10, 90 30, 70 50 C90 70, 70 90, 50 80 C30 90, 10 70, 30 50 C10 30, 30 10, 50 20 Z"
        fill="#a3d5a8"
        fillOpacity="0.5"
      />
      {/* Leaf Stem */}
      <path
        d="M50 80 Q50 90, 48 95"
        stroke="#7cb342"
        strokeWidth="2"
        fill="none"
      />
      {/* Leaf Veins */}
      <path
        d="M50 20 Q50 50, 70 50 M50 20 Q50 50, 30 50 M50 30 Q50 50, 65 60 M50 30 Q50 50, 35 60"
        stroke="#7cb342"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>
  );
  
  export default AnimatedLeafSVG;