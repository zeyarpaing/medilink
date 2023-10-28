import { ReactNode } from 'react';

export default async function Layout({
  children,
  revenue,
  stats,
}: {
  children: ReactNode;
  revenue: ReactNode;
  stats: ReactNode;
}) {
  return (
    <>
      {children}
      {stats}
      {revenue}
    </>
  );
}
