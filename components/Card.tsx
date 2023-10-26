import Image from 'next/image';
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
    <Link aria-label={title} href={link}>
      <article className="overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-sm hover:border-foreground/30">
        {image && <Image alt={title} className="h-56 w-full object-cover" height={500} src={image} width={1000} />}

        <div className="p-3 sm:p-4">
          <h3 className="text-lg font-semibold ">{title}</h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{description}</p>
        </div>
      </article>
    </Link>
  );
}
