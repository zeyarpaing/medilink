'use client';

import { DayPicker } from 'react-day-picker';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Input, InputProps } from '@nextui-org/react';
import { useState } from 'react';

import 'react-day-picker/dist/style.css';

type Props = {
  selected: Date;
  onSelectedChange: (value?: Date) => void;
};

const CURRENT_YEAR = new Date().getFullYear();
const LAST_YEAR = 1900;

export default function Datepicker({ selected, onSelectedChange, ...props }: InputProps & Props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover
        isOpen={open}
        onOpenChange={(value) => {
          setOpen(value);
        }}
        placement="bottom"
      >
        <PopoverTrigger>
          <Input
            labelPlacement="outside"
            placeholder="Date of birth"
            variant="bordered"
            classNames={{
              label: 'text-sm font-medium text-foreground',
              inputWrapper: '!h-14',
              input: 'text-left px-2',
            }}
            endContent={
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.83984 3.26257V5.51257M17.3398 3.26257V5.51257M3.08984 19.0126V7.76257C3.08984 7.16584 3.3269 6.59354 3.74885 6.17158C4.17081 5.74963 4.74311 5.51257 5.33984 5.51257H18.8398C19.4366 5.51257 20.0089 5.74963 20.4308 6.17158C20.8528 6.59354 21.0898 7.16584 21.0898 7.76257V19.0126M3.08984 19.0126C3.08984 19.6093 3.3269 20.1816 3.74885 20.6036C4.17081 21.0255 4.74311 21.2626 5.33984 21.2626H18.8398C19.4366 21.2626 20.0089 21.0255 20.4308 20.6036C20.8528 20.1816 21.0898 19.6093 21.0898 19.0126M3.08984 19.0126V11.5126C3.08984 10.9158 3.3269 10.3435 3.74885 9.92158C4.17081 9.49963 4.74311 9.26257 5.33984 9.26257H18.8398C19.4366 9.26257 20.0089 9.49963 20.4308 9.92158C20.8528 10.3435 21.0898 10.9158 21.0898 11.5126V19.0126M12.0898 13.0126H12.0978V13.0206H12.0898V13.0126ZM12.0898 15.2626H12.0978V15.2706H12.0898V15.2626ZM12.0898 17.5126H12.0978V17.5206H12.0898V17.5126ZM9.83984 15.2626H9.84784V15.2706H9.83984V15.2626ZM9.83984 17.5126H9.84784V17.5206H9.83984V17.5126ZM7.58984 15.2626H7.59784V15.2706H7.58984V15.2626ZM7.58984 17.5126H7.59784V17.5206H7.58984V17.5126ZM14.3398 13.0126H14.3478V13.0206H14.3398V13.0126ZM14.3398 15.2626H14.3478V15.2706H14.3398V15.2626ZM14.3398 17.5126H14.3478V17.5206H14.3398V17.5126ZM16.5898 13.0126H16.5978V13.0206H16.5898V13.0126ZM16.5898 15.2626H16.5978V15.2706H16.5898V15.2626Z"
                  stroke="#303030"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            label="Date of birth"
            {...props}
          />
        </PopoverTrigger>
        <PopoverContent>
          <DayPicker
            style={{
              // @ts-ignore
              '--rdp-accent-color': '#0096A9',
            }}
            mode="single"
            captionLayout="dropdown"
            fromYear={LAST_YEAR} 
            toYear={CURRENT_YEAR} 
            selected={selected}
            onSelect={(value) => {
              onSelectedChange(value);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
