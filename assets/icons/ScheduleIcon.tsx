import { SVGProps } from 'react';
export default function ScheduleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
        <rect height="30" rx="2" strokeLinejoin="round" width="40" x="4" y="10" />
        <path d="M14 6v8m11 9H14m20 8H14M34 6v8" />
      </g>
    </svg>
  );
}
