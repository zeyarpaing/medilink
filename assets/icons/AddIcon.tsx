import { SVGProps } from 'react';

export default function AddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
    >
      <path d="M12 4.5v15m7.5-7.5h-15" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
