import { motion } from 'framer-motion';
import  SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
  interface WindParticleSVGProps extends SVGProps {
    size?: number;
    speed?: number;
  }
  
  const WindParticleSVG: React.FC<WindParticleSVGProps> = ({
    style,
    className,
    size = 15,
    speed = 3,
  }) => (
    <motion.svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 6 }} // Above the tree
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      initial={{ x: '-100%' }}
      animate={{ x: '100vw' }}
      transition={{
        x: {
          duration: speed,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      }}
    >
      <circle cx="5" cy="5" r="3" fill="#a3d5a8" fillOpacity="0.7" />
    </motion.svg>
  );
  
  export default WindParticleSVG;