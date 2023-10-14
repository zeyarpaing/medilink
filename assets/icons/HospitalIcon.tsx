import { SVGProps } from 'react';
export default function HospitalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" {...props    }>
      <g fill="none" stroke="currentColor" strokeWidth="4">
        <path d="M33 5H5v38h28V5Z" strokeLinejoin="round" />
        <path d="M33 21h10v22H33" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 21h12m-6-6v12" strokeLinecap="round" />
      </g>
    </svg>
  );
}
