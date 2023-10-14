import { SVGProps } from 'react';
export default function HospitalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M32 11h8l4 10H4l4-10h8M8 21h32v22H8V21Z" />
        <path d="M16 5h16v16H16zm0 24h8v14h-8zm8 0h8v14h-8zm-3-16h6m9 30H12m12-27v-6" />
      </g>
    </svg>
  );
}
