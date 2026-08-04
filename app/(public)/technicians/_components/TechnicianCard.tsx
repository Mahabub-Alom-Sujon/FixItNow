import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Briefcase, MapPin, Star } from "lucide-react";
import { ITechnician } from "@/types/types.technicians";

interface TechnicianCardProps {
    tech: ITechnician;
}
const TechnicianCard = ({ tech }: TechnicianCardProps) => {
    return (
        <Card
            key={tech.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={
                {
                    "--card-spacing": "0px",
                } as React.CSSProperties
            }
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <Image
                    src={tech.user?.profileImage || "/images/tech-1.jpg"}
                    alt={tech.user?.name || "Technician"}
                    width={500}
                    height={400}
                    priority={false}
                    sizes="(max-width:640px) 100vw,
                    (max-width:768px) 50vw,
                    (max-width:1024px) 33vw,
                    25vw"
                    className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <Badge className="absolute left-5 top-5 bg-green-600 text-white">
                    Available
                </Badge>

                {tech?.user?.isVerified && (
                    <div className="absolute right-5 top-5 rounded-full bg-white p-2 shadow-lg">
                        <BadgeCheck className="h-5 w-5 text-blue-600" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-5 p-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">
                        {tech.user.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                        {tech.bio}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tech.averageRating}</span>
                        <span className="text-sm text-slate-500">
                            ({tech.totalReviews})
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-4 w-4" />
                        {tech.user?.city}
                    </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border bg-slate-50 px-4 py-1">
                    <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">
                            {tech.completedJobs}+
                        </p>
                        <span className="text-xs text-slate-500">
                            Jobs
                        </span>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="text-center">
                        <p className="text-lg font-bold text-slate-900">
                            {tech.experience}
                        </p>
                        <span className="text-xs text-slate-500">
                            Experience
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t pt-5">
                    <div>
                        <p className="text-sm text-slate-500">
                            Hourly Price
                        </p>
                        <h4 className="text-2xl font-bold text-blue-600">
                            ৳{tech.hourlyRate}
                        </h4>
                    </div>

                    <Button asChild>
                        <Link href={`/technicians/${tech.id}`}>
                            View Profile
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default TechnicianCard;