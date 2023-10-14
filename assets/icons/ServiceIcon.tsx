import { SVGProps } from 'react';
export default function ServiceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6 14l18-8l18 8M6 14l18 8M6 14v20l18 8m18-28l-18 8m18-8v20l-18 8m0-20v20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}
