import { Dispatch, useState } from 'react';

type StateProps<T> = {
  children: (state: T, setState: Dispatch<T>) => any;
  state: T;
};

export default function State<T>({ children, state }: StateProps<T>) {
  const [$state, setState] = useState(state);
  return children($state, setState);
}
