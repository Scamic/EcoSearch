// components/ui/SunSVG.tsx
import { motion } from 'framer-motion';
import { SVGProps } from 'react';

// Define the props interface
interface SunSVGProps extends SVGProps<SVGSVGElement> {
  style?: React.CSSProperties;
  className?: string;
}

const SunSVG: React.FC<SunSVGProps> = ({ style, className }) => {
  return (
    <motion.svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 5 }}
      width="150"
      height="150"
      viewBox="0 0 100 100"
      fill="none"
      animate={{ rotate: [0, 90] }}
      transition={{
        rotate: {
          duration: 1, // 90 degrees in 1 second (90 deg/sec)
          repeat: Infinity,
          repeatType: 'loop' as const,
          repeatDelay: 0.7, // 0.7-second pause after each rotation
          ease: 'linear',
        },
      }}
    >
      {/* Sun Circle */}
      <circle cx="50" cy="50" r="30" fill="#FFD700" fillOpacity="0.7" />

      {/* Triangles around the sun (8 triangles, one every 45 degrees) */}
      {/* Triangle 1: 0 degrees (top) - Light */}
      <path
        d="M50 5 L60 25 L40 25 Z" // Larger triangle: apex at y=5, base widened to x=40 to x=60
        fill="#FFECB3"
        fillOpacity="0.6"
        transform="rotate(0 50 50)"
      />
      {/* Triangle 2: 45 degrees - Dark */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFA500"
        fillOpacity="0.6"
        transform="rotate(45 50 50)"
      />
      {/* Triangle 3: 90 degrees (right) - Light */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFECB3"
        fillOpacity="0.6"
        transform="rotate(90 50 50)"
      />
      {/* Triangle 4: 135 degrees - Dark */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFA500"
        fillOpacity="0.6"
        transform="rotate(135 50 50)"
      />
      {/* Triangle 5: 180 degrees (bottom) - Light */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFECB3"
        fillOpacity="0.6"
        transform="rotate(180 50 50)"
      />
      {/* Triangle 6: 225 degrees - Dark */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFA500"
        fillOpacity="0.6"
        transform="rotate(225 50 50)"
      />
      {/* Triangle 7: 270 degrees (left) - Light */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFECB3"
        fillOpacity="0.6"
        transform="rotate(270 50 50)"
      />
      {/* Triangle 8: 315 degrees - Dark */}
      <path
        d="M50 5 L60 25 L40 25 Z"
        fill="#FFA500"
        fillOpacity="0.6"
        transform="rotate(315 50 50)"
      />
    </motion.svg>
  );
};

export default SunSVG;