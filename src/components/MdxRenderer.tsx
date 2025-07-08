'use client';

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client/index.js'; // Don't omit index.js!

export default function MdxRenderer({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
