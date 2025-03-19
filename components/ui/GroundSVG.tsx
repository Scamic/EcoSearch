import SVGProps  from 'react';


interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }

  const GroundSVG: React.FC<SVGProps> = ({ style, className }) => (
    <svg
      className={`absolute z-5 ${className}`}
      style={{ ...style, zIndex: 5 }} // Explicit z-index
      width="100%"
      height="250" // Increased height for better visibility
      viewBox="0 0 1000 250"
      fill="none"
      preserveAspectRatio="none"
    >
      {/* Ground Base */}
      <path
        d="M0 250 L0 50 Q250 100, 500 50 Q750 0, 1000 50 L1000 250 Z"
        fill="#d2e2c8"
        fillOpacity="1" // Ensure full opacity
      />
      {/* Grass */}
      <path
        d="M0 50 Q50 20, 100 50 T200 50 T300 50 T400 50 T500 50 T600 50 T700 50 T800 50 T900 50 T1000 50"
        stroke="#7cb342"
        strokeWidth="5"
        fill="none"
      />
      {/* Small Grass Tufts */}
      <path
        d="M50 50 L40 30 M50 50 L60 30 M150 50 L140 30 M150 50 L160 30 M250 50 L240 30 M250 50 L260 30 M350 50 L340 30 M350 50 L360 30 M450 50 L440 30 M450 50 L460 30 M550 50 L540 30 M550 50 L560 30 M650 50 L640 30 M650 50 L660 30 M750 50 L740 30 M750 50 L760 30 M850 50 L840 30 M850 50 L860 30 M950 50 L940 30 M950 50 L960 30"
        stroke="#7cb342"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
  
  export default GroundSVG;