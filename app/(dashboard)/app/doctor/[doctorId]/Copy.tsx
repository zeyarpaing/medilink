'use client';
import React from 'react';
import toast from 'react-hot-toast';

type Props = { url: string };

export default function Copy({ url }: Props) {
  return (
    <>
      <button
        className="h-full border-l-2 px-3 text-sm hover:border-foreground/60 hover:bg-foreground/20 active:bg-foreground/10"
        onClick={() => {
          navigator.clipboard.writeText(url).then(() => {
            toast.success('Copied to clipboard');
          });
        }}
      >
        Copy
      </button>
    </>
  );
}
