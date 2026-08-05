import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
    technician: {
        bio: string;
        experience: number;
        hourlyRate: number;
        skills: string;
        certification: string;

        user: {
            name: string;
            profileImage: string;
        };
    };
}

export default function TechnicianInfo({
                                           technician,
                                       }: Props) {
    return (
        <Card>
            <CardHeader>
                <h3 className="text-xl font-semibold">
                    Technician
                </h3>
            </CardHeader>

            <CardContent className="space-y-4">
                <Avatar className="w-20 h-20">
                    <AvatarImage src={technician.user.profileImage} />
                    <AvatarFallback>
                        {technician.user.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>

                <h4 className="font-semibold">
                    {technician.user.name}
                </h4>

                <p>{technician.bio}</p>

                <div className="space-y-2">
                    <p>Experience : {technician.experience} Years</p>

                    <p>Hourly Rate : ৳{technician.hourlyRate}</p>

                    <p>Skills : {technician.skills}</p>

                    <p>
                        Certification : {technician.certification}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}