import ServicePage, { serviceMetadata } from "@/components/pages/ServicePage";
import data from "@/content/services/marketplace-management";

export const metadata = serviceMetadata(data);

export default function Page() {
  return <ServicePage data={data} />;
}
