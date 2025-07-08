import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export function useMDXComponent(code: string) {
  return useMemo(() => getMDXComponent(code), [code]);
}
