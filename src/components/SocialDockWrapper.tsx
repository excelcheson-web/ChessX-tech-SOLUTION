"use client";

import { usePathname } from "next/navigation";
import SocialDock from "./SocialDock";

export default function SocialDockWrapper() {
  const pathname = usePathname();
  if (pathname !== "/" && pathname !== "/contact") return null;
  return <SocialDock />;
}
