import { SVGProps } from 'react';

export default function ChevronBtnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="55" viewBox="0 0 55 55" width="55" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="27.5" cy="27.5" fill="transparent" r="26" stroke="currentColor" strokeWidth="3" />
      <path d="M25 38L33 27.5L25 17" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}
