import { SVGProps } from 'react';
export default function RealtimeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M4 5h40M4 43h40M8 36v7" strokeLinecap="round" />
        <path d="M12 28H4v8h8v-8Zm16-8h-8v8h8v-8Zm16-8h-8v8h8v-8Z" strokeLinejoin="round" />
        <path d="M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15" strokeLinecap="round" />
      </g>
    </svg>
  );
}
