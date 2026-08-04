import ReviewsSection from "./_component/ReviewsSection";
import { getTechnicianById } from "@/app/(public)/technicians/_actions/getTechnicianById";
import TechnicianHeader from "@/app/(public)/technicians/[id]/_component/TechnicianHeader";
import AboutSection from "@/app/(public)/technicians/[id]/_component/AboutSection";
import SkillsSection from "@/app/(public)/technicians/[id]/_component/SkillsSection";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function TechnicianDetailsPage({
                                                        params,
                                                    }: PageProps) {
    const { id } = await params;

    const result = await getTechnicianById(id);

    if (!result.success || !result.data) {
        return (
            <div className="container py-20 text-center">
                Technician not found.
            </div>
        );
    }

    const technician = result.data;

    return (
        <div className="container mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="space-y-8 lg:col-span-7">
                    <TechnicianHeader technician={technician} />
                    <AboutSection technician={technician} />
                </div>

                <aside className="space-y-8 lg:col-span-5">
                    <SkillsSection technician={technician} />
                    <ReviewsSection reviews={technician.reviews} />
                </aside>
            </div>
        </div>
    );
}