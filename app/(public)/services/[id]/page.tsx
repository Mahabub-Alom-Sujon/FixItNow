import { getServiceDetails } from "./_actions/getServiceSingle";
import ServiceDetails from "./_components/ServiceDetails";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ServicePage({
                                              params,
                                          }: PageProps) {
    const { id } = await params;

    const { data } = await getServiceDetails(id);

    return (
        <div className="mt-10 mx-auto w-full max-w-7xl px-4 py-8 md:px-6 lg:px-8">
            <ServiceDetails service={data} />
        </div>
    );
}