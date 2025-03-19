import SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }

const CircleSVG: React.FC<SVGProps> = ({ style, className }) => (
  <svg className={`absolute opacity-10 ${className}`} style={style} width="120" height="120" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="40" stroke="#7cb342" strokeWidth="2" fill="none" />
  </svg>
);

export default CircleSVG;