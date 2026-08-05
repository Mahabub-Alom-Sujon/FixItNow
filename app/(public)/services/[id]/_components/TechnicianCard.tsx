import Link from "next/link";
import { Award, Briefcase, Star, ArrowRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IServiceDetails } from "@/types/types.servicesingle";
import { Separator } from "@/components/ui/separator";
interface TechnicianCardProps {
    technician: IServiceDetails["technician"];
}

export default function TechnicianCard({
                                           technician,
                                       }: TechnicianCardProps) {
    return (
        <Card className="rounded-2xl border shadow-sm">
            <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                About the Technician
                            </h2>

                            <p className="text-sm text-muted-foreground">
                                Meet the professional providing this service.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <Button asChild className="shrink-0 rounded-xl">
                        <Link href={`/technicians/${technician.id}`}>
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <Separator/>
                <div className="mt-4 mb-6 flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={technician.user.profileImage ?? ""} />
                        <AvatarFallback>
                            {technician.user.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                        <h3 className="text-xl font-semibold">
                            {technician.user.name}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <Badge variant="secondary">
                                Verified Technician
                            </Badge>

                            <Badge variant="outline">
                                {technician.experience} Years Experience
                            </Badge>
                        </div>
                    </div>
                </div>

                <Card className="mt-6 rounded-2xl border shadow-sm">
                    <CardContent className="flex items-center justify-between p-1">
                        {/* Rating */}
                        <div className="flex flex-1 flex-col items-center">
                            <Star className="mb-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <p className="text-xl font-bold">
                                {technician.averageRating.toFixed(1)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Rating
                            </p>
                        </div>

                        <div className="h-12 w-px bg-border" />

                        {/* Jobs */}
                        <div className="flex flex-1 flex-col items-center">
                            <Briefcase className="mb-2 h-5 w-5 text-primary" />
                            <p className="text-xl font-bold">
                                {technician.completedJobs}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Jobs
                            </p>
                        </div>

                        <div className="h-12 w-px bg-border" />

                        {/* Experience */}
                        <div className="flex flex-1 flex-col items-center">
                            <Award className="mb-2 h-5 w-5 text-green-600" />
                            <p className="text-xl font-bold">
                                {technician.experience}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Years
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}