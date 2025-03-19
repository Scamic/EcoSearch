import SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
  const LeafSVG: React.FC<SVGProps> = ({ style, className }) => (
    <svg
      className={`absolute ${className}`}
      style={{ ...style, zIndex: 5 }}
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 20 C70 10, 90 30, 70 50 C90 70, 70 90, 50 80 C30 90, 10 70, 30 50 C10 30, 30 10, 50 20 Z"
        fill="#a3d5a8"
        fillOpacity="1"
      />
      <path
        d="M50 80 Q50 90, 48 95"
        stroke="#7cb342"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 20 Q50 50, 70 50 M50 20 Q50 50, 30 50 M50 30 Q50 50, 65 60 M50 30 Q50 50, 35 60"
        stroke="#7cb342"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
  
  export default LeafSVG;
