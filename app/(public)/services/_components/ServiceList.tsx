import { getServices } from "@/app/(public)/services/_actions/getServices";
import ServiceCard from "./ServiceCard";
import { IService } from "@/types/types.service";

export async function ServiceList({
  searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const query = await searchParams;
    const result = await getServices({ query });

    const services: IService[] = result.data?.data ?? [];

    return (
            <>
                {result.success && services.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                ) : (
                    <p className="py-12 text-center text-muted-foreground">
                        No service found.
                    </p>
                )}
            </>
    );
}