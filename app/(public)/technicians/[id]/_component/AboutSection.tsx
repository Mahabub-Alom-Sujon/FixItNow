import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { ITechnician } from "@/types/types.technicians";
import {Separator} from "@/components/ui/separator";

interface AboutSectionProps {
    technician: ITechnician;
}

export default function AboutSection({
                                         technician,
                                     }: AboutSectionProps) {
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-blue-100 p-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                    </div>

                    <h2 className="text-2xl font-bold">
                        About Technician
                    </h2>
                </div>
                <Separator/>
                <p className="mt-4 leading-8 text-muted-foreground">
                    {technician.bio ||
                        "No additional information available."}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border bg-slate-50 p-4">
                        <p className="text-sm text-muted-foreground">
                            Experience
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                            {technician.experience} Years
                        </h3>
                    </div>

                    <div className="rounded-xl border bg-slate-50 p-4">
                        <p className="text-sm text-muted-foreground">
                            Certification
                        </p>

                        <h3 className="mt-1 text-lg font-semibold">
                            {technician.certification}
                        </h3>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}