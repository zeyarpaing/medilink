import { SVGProps } from 'react';
export default function Ellipsis(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
