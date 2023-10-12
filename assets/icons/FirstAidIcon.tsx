import { SVGProps } from 'react';
export default function FirstAidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" {...props}>
      <g fill="none">
        <rect height="26" rx="3" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" width="38" x="5" y="16" />
        <path
          d="M19 8h10V4H19v4Zm11 1v7h4V9h-4Zm-12 7V9h-4v7h4Zm11-8a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4ZM19 4a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1V4Z"
          fill="currentColor"
        />
        <path
          d="M18 29h12m-6-6v12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
