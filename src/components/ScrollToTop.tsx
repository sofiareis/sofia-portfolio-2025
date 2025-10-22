"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const layout = document.querySelector(".overflow-auto");
    if (layout) {
      layout.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}
