import React, { useEffect } from 'react';

type Props = {
  callback: () => void;
  deps: any[];
};

export default function Effect({ callback, deps }: Props) {
  useEffect(callback, deps);
  return null;
}
