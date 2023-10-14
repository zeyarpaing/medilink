import { SVGProps } from 'react';
export default function BookingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="M10 6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6Z" />
        <path d="M34 6v36M6 14h8M6 24h8M6 34h8M27 4h12M27 44h12" strokeLinecap="round" />
      </g>
    </svg>
  );
}
