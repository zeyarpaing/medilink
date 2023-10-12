import { SVGProps } from 'react';
export default function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="M6 9.256L24.009 4L42 9.256v10.778C42 31.362 34.75 40.419 24.003 44C13.253 40.42 6 31.36 6 20.029V9.256Z" />
        <circle cx="24" cy="18" r="5" strokeLinecap="round" />
        <path d="M32 31a8 8 0 1 0-16 0" strokeLinecap="round" />
      </g>
    </svg>
  );
}
