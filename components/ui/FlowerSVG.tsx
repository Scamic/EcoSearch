import SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
  const FlowerSVG: React.FC<SVGProps> = ({ style, className }) => (
    <svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 5 }} // Same z-index as the tree
      width="30"
      height="50"
      viewBox="0 0 30 50"
      fill="none"
    >
      {/* Stem */}
      <path d="M15 50 L15 20" stroke="#7cb342" strokeWidth="2" />
      {/* Petals */}
      <circle cx="15" cy="15" r="5" fill="#ffeb3b" fillOpacity="1" />
      <circle cx="10" cy="10" r="5" fill="#ffeb3b" fillOpacity="1" />
      <circle cx="20" cy="10" r="5" fill="#ffeb3b" fillOpacity="1" />
      <circle cx="10" cy="20" r="5" fill="#ffeb3b" fillOpacity="1" />
      <circle cx="20" cy="20" r="5" fill="#ffeb3b" fillOpacity="1" />
      {/* Center */}
      <circle cx="15" cy="15" r="3" fill="#f57f17" fillOpacity="1" />
    </svg>
  );
  
  export default FlowerSVG;