import { SVGProps } from 'react';

export default function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      {...props}
    >
      <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
