import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import data from "@/content/services/private-label";

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePage data={data} />;
}
