'use client';
import { useField } from 'formik';
import Image from 'next/image';
import React from 'react';

type Props = {
  label?: string;
  name: string;
};

export default function ImageInput({ label, name }: Props) {
  const [field, _, { setValue }] = useField({ name });
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div
        className="group relative grid h-[23rem] w-full items-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300"
        id="dropzone"
      >
        <input
          accept="image/*"
          className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
          onChange={(e) => {
            e.target.files?.length && setValue(e.target.files?.[0]);
          }}
          type="file"
        />
        {field.value ? (
          <div className="relative z-10 h-full w-full">
            <Image
              alt="image"
              className="h-[23rem] w-full object-cover"
              height={800}
              src={typeof field.value === 'string' ? field.value : URL.createObjectURL(field.value)}
              width={1200}
            />
            <button
              aria-label="change image"
              className="absolute inset-0 flex translate-y-12 flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              type="button"
            >
              <div className="mx-auto w-fit rounded-full bg-background px-6 py-2 text-foreground">Change</div>
            </button>
          </div>
        ) : (
          <div className="p-6 text-center  text-gray-600">
            <svg className="mx-auto" fill="currentColor" height="40" viewBox="0 0 24 24" width="40">
              <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z" />
            </svg>

            <h3 className="mt-2 text-sm font-medium ">
              <label className="relative cursor-pointer" htmlFor="file-upload">
                <span>Drag and drop</span>
                <span className="text-primary"> or browse</span>
                <span> to upload</span>
                <input className="sr-only" id="file-upload" name="file-upload" type="file" />
              </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}
      </div>
    </div>
  );
}
