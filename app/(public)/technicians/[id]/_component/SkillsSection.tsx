import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";
import { ITechnician } from "@/types/types.technicians";
import { Separator } from "@/components/ui/separator"
interface SkillsSectionProps {
    technician: ITechnician;
}

export default function SkillsSection({
                                          technician,
                                      }: SkillsSectionProps) {
    const skills =
        technician.skills
            ?.split(",")
            .map((skill) => skill.trim())
            .filter(Boolean) || [];

    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-100 p-2">
                        <Wrench className="h-5 w-5 text-emerald-600" />
                    </div>

                    <h2 className="text-2xl font-bold">
                        Skills & Expertise
                    </h2>
                </div>
                <Separator/>
                {skills.length > 0 ? (
                    <div className="flex flex-wrap gap-3 mt-4">
                        {skills.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="rounded-full px-4 py-4 text-sm"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">
                        No skills available.
                    </p>
                )}
            </CardContent>
        </Card>
    );
}