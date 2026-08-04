"use client"
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
export default function TechnicianSearchBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null)
    const handleChange = (value : string) => {
        // console.log(value);
        if(debouncedReference.current){
            clearTimeout(debouncedReference.current)
        }
        debouncedReference.current = setTimeout(() =>{
            // console.log(value);
            const params = new URLSearchParams();
            if (value) {
                params.set("searchTerm", value);
            } else {
                params.delete("searchTerm");
            }
            router.replace(`${pathname}?${params.toString()}`);
        }, 500)
    }
    return (
        <div className="relative flex items-center w-full max-w-[400px]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <Input
                defaultValue={searchParams.get("searchTerm")?.toString() ?? ""}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Search Service..."
                className="h-12 w-full pl-10"
            />
        </div>
    )
}