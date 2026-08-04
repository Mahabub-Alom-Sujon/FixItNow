import TechnicianCard from "./TechnicianCard";
import { ITechnician } from "@/types/types.technicians";
import { getTechnicians } from "@/app/(public)/technicians/_actions/getTechnicians";

export default async function TechnicianList({
                                                 searchParams,
                                             }: {
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}) {
    const query = await searchParams;

    const result = await getTechnicians({ query });

    const technicians: ITechnician[] = result.data?.data ?? [];

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {technicians.map((tech) => (
                <TechnicianCard
                    key={tech.id}
                    tech={tech}
                />
            ))}
        </div>
    );
}