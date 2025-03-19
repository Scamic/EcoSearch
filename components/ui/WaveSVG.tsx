import SVGProps  from 'react';

interface SVGProps {
    style?: React.CSSProperties;
    className?: string;
  }

const WaveSVG: React.FC<SVGProps> = ({ style, className }) => (
  <svg className={`absolute opacity-20 ${className}`} style={style} width="200" height="100" viewBox="0 0 200 100" fill="none">
    <path
      d="M0 50 Q50 20, 100 50 T200 50"
      stroke="#7cb342"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default WaveSVG;