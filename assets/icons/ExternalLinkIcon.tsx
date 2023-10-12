import { SVGProps } from 'react';

export default function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="21" viewBox="0 0 20 21" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.49756 5.49967H5.33089C4.91097 5.49967 4.50824 5.67527 4.21131 5.98783C3.91437 6.30039 3.74756 6.72431 3.74756 7.16634V15.4997C3.74756 15.9417 3.91437 16.3656 4.21131 16.6782C4.50824 16.9907 4.91097 17.1663 5.33089 17.1663H13.2476C13.6675 17.1663 14.0702 16.9907 14.3671 16.6782C14.6641 16.3656 14.8309 15.9417 14.8309 15.4997V12.1663M11.6642 3.83301H16.4142M16.4142 3.83301V8.83301M16.4142 3.83301L8.49756 12.1663"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
