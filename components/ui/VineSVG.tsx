import SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }
const VineSVG: React.FC<SVGProps> = ({ style, className }) => (
  <svg className={`absolute opacity-10 ${className}`} style={style} width="150" height="50" viewBox="0 0 150 50" fill="none">
    <path
      d="M0 25 Q25 0, 50 25 T100 25 T150 25"
      stroke="#7cb342"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default VineSVG;