import SVGProps  from 'react';


interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
  const RockSVG: React.FC<SVGProps> = ({ style, className }) => (
    <svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 5 }} // Same z-index as the tree
      width="50"
      height="30"
      viewBox="0 0 50 30"
      fill="none"
    >
      <path
        d="M0 30 Q10 10, 25 20 Q40 10, 50 30 Z"
        fill="#999"
        fillOpacity="1"
      />
    </svg>
  );
  
  export default RockSVG;