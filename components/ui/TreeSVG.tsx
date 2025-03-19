import { motion } from 'framer-motion';
import SVGProps  from 'react';


interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
  const TreeSVG: React.FC<SVGProps> = ({ style, className }) => (
    <motion.svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 5 }}
      width="300"
      height="500"
      viewBox="0 0 200 400"
      fill="none"
      animate={{
        x: [0, 5, -5, 0],
      }}
      transition={{
        x: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      }}
    >
      {/* Tree Trunk */}
      <rect x="90" y="200" width="20" height="200" fill="#8B4513" fillOpacity="0.6" />
      {/* Branches */}
      <path d="M100 200 L70 150 M100 200 L130 160" stroke="#8B4513" strokeWidth="5" strokeOpacity="0.8" />
      {/* Tree Canopy */}
      <path
        d="M100 50 C150 0, 200 50, 150 100 C200 150, 100 200, 50 150 C0 150, 50 100, 100 50 Z"
        fill="#7cb342"
        fillOpacity="0.8"
      />
      <path
        d="M100 80 C140 30, 180 80, 140 130 C180 180, 100 220, 60 180 C20 180, 60 130, 100 80 Z"
        fill="#a3d5a8"
        fillOpacity="0.8"
      />
      <path
        d="M100 110 C130 70, 160 110, 130 150 C160 190, 100 230, 70 190 C40 190, 70 150, 100 110 Z"
        fill="#7cb342"
        fillOpacity="0.8"
      />
    </motion.svg>
  );
  
  export default TreeSVG;