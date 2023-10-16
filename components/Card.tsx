import Link from 'next/link';
import React from 'react';

type Props = {
  description: string;
  image: string;
  link: string;
  title: string;
};

export default function Card({ description, image, link, title }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img alt="Office" className="h-56 w-full object-cover" src={image} />

      <div className="p-3 sm:p-4">
        <Link href={link}>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{description}</p>

        <Link className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary" href={link}>
          Edit
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
