import { getAllTechnicians } from "@/app/(dashboard)/admin/_actions/getTechnicians";
import Technicians from "@/app/(dashboard)/admin/_components/Technicians";

export default async function TechnicianPage() {
    const { data } = await getAllTechnicians();

    return (
        <Technicians
            initialTechnicians={data.technicians ?? []}
        />
    );
}