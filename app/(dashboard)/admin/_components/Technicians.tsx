// "use client";
//
// import DataTable, { TableColumn } from "react-data-table-component";
// import { Badge } from "@/components/ui/badge";
//
// interface Technician {
//     id: string;
//     experience: number;
//     hourlyRate: number | null;
//     averageRating: number;
//     completedJobs: number;
//     isAvailable: boolean;
//
//     user: {
//         name: string;
//         email: string;
//         phone: string;
//         profileImage?: string | null;
//     };
// }
//
// interface Props {
//     initialTechnicians: Technician[];
// }
//
// export default function Technicians({
//                                         initialTechnicians,
//                                     }: Props) {
//     const columns: TableColumn<Technician>[] = [
//         {
//             name: "Name",
//             selector: (row) => row.user.name,
//             sortable: true,
//             grow: 2,
//         },
//         {
//             name: "Email",
//             selector: (row) => row.user.email,
//             sortable: true,
//             grow: 2,
//         },
//         {
//             name: "Phone",
//             selector: (row) => row.user.phone,
//             grow: 1.5,
//         },
//         {
//             name: "Experience",
//             cell: (row) => (
//                 <Badge variant="outline">
//                     {row.experience} Years
//                 </Badge>
//             ),
//             sortable: true,
//         },
//         {
//             name: "Rating",
//             cell: (row) => (
//                 <Badge variant="secondary">
//                     ⭐ {row.averageRating.toFixed(1)}
//                 </Badge>
//             ),
//             sortable: true,
//         },
//         {
//             name: "Completed Jobs",
//             selector: (row) => row.completedJobs,
//             sortable: true,
//         },
//         {
//             name: "Hourly Rate",
//             cell: (row) => (
//                 <span className="font-medium">
//           ৳ {row.hourlyRate ?? 0}/hr
//         </span>
//             ),
//             sortable: true,
//         },
//         {
//             name: "Status",
//             cell: (row) => (
//                 <Badge
//                     variant={row.isAvailable ? "default" : "destructive"}
//                 >
//                     {row.isAvailable ? "Available" : "Unavailable"}
//                 </Badge>
//             ),
//             center: true,
//         },
//     ];
//
//     return (
//         <DataTable
//             title="Technicians"
//             columns={columns}
//             data={initialTechnicians}
//             pagination
//             highlightOnHover
//             striped
//             responsive
//             persistTableHead
//             defaultSortFieldId={1}
//         />
//     );
// }

"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
interface Technician {
    id: string;
    experience: number;
    hourlyRate: number | null;
    averageRating: number;
    completedJobs: number;
    isAvailable: boolean;

    user: {
        name: string;
        email: string;
        phone: string;
    };
}

interface Props {
    initialTechnicians: Technician[];
}

export default function Technicians({
                                        initialTechnicians,
                                    }: Props) {
    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="text-3xl">Technicians</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Experience</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Jobs</TableHead>
                                <TableHead>Hourly Rate</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {initialTechnicians.map((tech) => (
                                <TableRow key={tech.id}>
                                    <TableCell className="font-medium">
                                        {tech.user.name}
                                    </TableCell>

                                    <TableCell>{tech.user.email}</TableCell>

                                    <TableCell>{tech.user.phone}</TableCell>

                                    <TableCell>
                                        <Badge variant="outline">
                                            {tech.experience} Years
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        ⭐ {tech.averageRating}
                                    </TableCell>

                                    <TableCell>{tech.completedJobs}</TableCell>

                                    <TableCell>
                                        ৳ {tech.hourlyRate ?? 0}/hr
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={
                                                tech.isAvailable
                                                    ? "default"
                                                    : "destructive"
                                            }
                                        >
                                            {tech.isAvailable
                                                ? "Available"
                                                : "Unavailable"}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {initialTechnicians.length === 0 && (
                                <TableRow>
                                    <TableCell
                                        colSpan={8}
                                        className="h-24 text-center"
                                    >
                                        No technicians found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}