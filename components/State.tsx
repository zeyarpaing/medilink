import { ReactNode, useState, Dispatch } from 'react';

type StateProps<T> = {
  children: (state: T, setState: Dispatch<T>) => JSX.Element;
  state: T;
};

export default function State<T>({ children, state }: StateProps<T>) {
  const [$state, setState] = useState(state);
  return children($state, setState);
}
