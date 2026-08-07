import Link from "next/link";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavProps {
    // category: string;
    serviceTitle: string;
}

export default function BreadcrumbNav({
  serviceTitle,
}: BreadcrumbNavProps) {
    return (
        <div className="mb-8 space-y-4 rounded-2xl border  bg-secondary p-6">
            {/* Back Button */}
            <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
            </Link>

            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="flex items-center gap-1">
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/services">Services</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>

                    {/*<BreadcrumbItem>*/}
                    {/*    <BreadcrumbLink asChild>*/}
                    {/*        <Link href={`/services?category=${category}`}>*/}
                    {/*            {category}*/}
                    {/*        </Link>*/}
                    {/*    </BreadcrumbLink>*/}
                    {/*</BreadcrumbItem>*/}

                    <BreadcrumbSeparator>
                        <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>

                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">
                            {serviceTitle}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}