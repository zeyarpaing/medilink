import { SVGProps } from 'react';

export default function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
