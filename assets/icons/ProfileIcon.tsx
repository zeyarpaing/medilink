import { SVGProps } from 'react';
export default function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <circle cx="24" cy="12" r="8" />
        <path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44" />
      </g>
    </svg>
  );
}
