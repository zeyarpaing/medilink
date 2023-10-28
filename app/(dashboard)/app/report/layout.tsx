import { ReactNode } from 'react';

export default async function Layout({
  children,
  revenue,
  performance,
}: {
  children: ReactNode;
  revenue: ReactNode;
  performance: ReactNode;
}) {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Reports</h1>
      {children}
      {revenue}
      {performance}
    </>
  );
}
