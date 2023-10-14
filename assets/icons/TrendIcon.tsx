import { SVGProps } from 'react';
export default function TrendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
        <path d="M4 44h40" strokeLinecap="round" />
        <path d="m4 26l8 2v10H4V26Zm16-2l8-4v18h-8V24Zm16-8l8-4v26h-8V16Z" />
        <path d="m4 18l8 2L44 4H34" strokeLinecap="round" />
      </g>
    </svg>
  );
}
