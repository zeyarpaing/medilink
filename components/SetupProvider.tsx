import EmptyState from '@/components/EmptyState';
import { sitemap } from '@/lib/constants';
import React from 'react';

type Props = {};

export default function SetupProvider({}: Props) {
  return (
    <EmptyState
      title="Setup your healthcare provider"
      description="You need to setup your healthcare provider first."
      action={{
        label: 'Setup provider',
        link: sitemap.app.children.provider.href,
      }}
    />
  );
}
