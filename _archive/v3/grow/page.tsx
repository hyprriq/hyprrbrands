import type { Metadata } from "next";
import HubPage, { hubMetadata } from "@/components/HubPage";

export const metadata: Metadata = hubMetadata("grow");

export default function Page() {
  return <HubPage engine="grow" />;
}
