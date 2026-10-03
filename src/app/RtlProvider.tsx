"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ReactNode, useState } from "react";

type RtlProviderProps = {
  children: ReactNode;
};
export default function RtlProvider({ children }: RtlProviderProps) {
  const [cache] = useState(() =>
    createCache({
      key: "muirtl",
      stylisPlugins: [prefixer, rtlPlugin],
    }),
  );

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
