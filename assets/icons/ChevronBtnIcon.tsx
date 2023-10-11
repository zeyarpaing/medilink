import { SVGProps } from 'react';

export default function ChevronBtnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55" fill="none" height="55" width="55" {...props}>
      <circle stroke="currentColor" strokeWidth="3" fill="transparent" cy="27.5" cx="27.5" r="26" />
      <path d="M25 38L33 27.5L25 17" strokeLinecap="round" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
