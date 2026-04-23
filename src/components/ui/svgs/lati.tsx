import type { SVGProps } from 'react';

/** Logo Lati (versión “blank”: sin fondo, `currentColor` para glifos). */
const Lati = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))' }}>
      <path d="M 52 35 Q 17 55 52 75 Q 37 55 52 35 Z" />
      <path d="M 71 35 Q 36 55 71 75 Q 56 55 71 35 Z" />
      <path d="M 82 30 L 94 30 L 94 68 L 110 68 L 110 80 L 82 80 Z" />
      <path d="M 120 30 L 132 30 L 147 80 L 134 80 L 131 68 L 121 68 L 118 80 L 105 80 Z M 126 45 L 129 57 L 123 57 Z" />
      <path d="M 152 30 L 182 30 L 182 42 L 173 42 L 173 80 L 161 80 L 161 42 L 152 42 Z" />
      <path d="M 187 30 L 199 30 L 199 80 L 187 80 Z" />
      <path d="M 208 35 Q 243 55 208 75 Q 223 55 208 35 Z" />
      <path d="M 227 35 Q 262 55 227 75 Q 242 55 227 35 Z" />
    </g>
  </svg>
);

export { Lati };
export default Lati;
