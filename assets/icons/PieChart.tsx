import { SVGProps } from 'react';
export default function PieChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4v20h20Z" />
        <path d="M43.084 18H30V4.916A20.047 20.047 0 0 1 43.084 18Z" />
      </g>
    </svg>
  );
}
