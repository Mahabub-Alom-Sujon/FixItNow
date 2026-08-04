// "use client";
//
// import { useRouter, useSearchParams } from "next/navigation";
// import { Search, RotateCcw } from "lucide-react";
//
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
//
// const categories = [
//     "Electrical",
//     "Plumbing",
//     "Cleaning",
//     "Painting",
// ];
//
// export default function ServiceFilter() {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//
//     const updateQuery = (key: string, value: string) => {
//         const params = new URLSearchParams(searchParams.toString());
//
//         if (!value || value === "all") {
//             params.delete(key);
//         } else {
//             params.set(key, value);
//         }
//
//         params.set("page", "1");
//
//         router.push(`/services?${params.toString()}`);
//     };
//
//     const resetFilters = () => {
//         router.push("/services");
//     };
//
//     return (
//         <Card className="sticky top-24">
//             <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Filters</CardTitle>
//                 <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={resetFilters}
//                 >
//                     <RotateCcw className="h-4 w-4" />
//                 </Button>
//             </CardHeader>
//
//             <CardContent className="space-y-5">
//                  {/*Category*/}
//                 <div>
//                     <label className="mb-2 block text-sm font-medium">
//                         Category
//                     </label>
//
//                     <Select
//                         defaultValue={searchParams.get("type") ?? "all"}
//                         onValueChange={(value) => updateQuery("type", value)}
//                     >
//                         <SelectTrigger className="w-full">
//                             <SelectValue />
//                         </SelectTrigger>
//
//                         <SelectContent>
//                             <SelectItem value="all">All</SelectItem>
//
//                             {categories.map((item) => (
//                                 <SelectItem key={item} value={item}>
//                                     {item}
//                                 </SelectItem>
//                             ))}
//                         </SelectContent>
//                     </Select>
//                 </div>
//
//                 {/* Location */}
//                 <div>
//                     <label className="mb-2 block text-sm font-medium">
//                         Location
//                     </label>
//
//                     <Input
//                         placeholder="Search by Location"
//                         defaultValue={searchParams.get("location") ?? ""}
//                         onBlur={(e) =>
//                             updateQuery("location", e.target.value)
//                         }
//                     />
//                 </div>
//
//                 {/* Rating */}
//                 <div>
//                     <label className="mb-2 block text-sm font-medium">
//                         Rating
//                     </label>
//
//                     <Select
//                         defaultValue={searchParams.get("rating") ?? "all"}
//                         onValueChange={(value) => updateQuery("rating", value)}
//                     >
//                         <SelectTrigger className="w-full">
//                             <SelectValue />
//                         </SelectTrigger>
//
//                         <SelectContent>
//                             <SelectItem value="all">All</SelectItem>
//                             <SelectItem value="5">5 ★</SelectItem>
//                             <SelectItem value="4">4 ★ & Up</SelectItem>
//                             <SelectItem value="3">3 ★ & Up</SelectItem>
//                         </SelectContent>
//                     </Select>
//                 </div>
//
//                 {/* Price */}
//                 <div className="grid grid-cols-2 gap-3">
//                     <div>
//                         <label className="mb-2 block text-sm font-medium">
//                             Min Price
//                         </label>
//
//                         <Input
//                             type="number"
//                             placeholder="500"
//                             defaultValue={searchParams.get("minPrice") ?? ""}
//                             onBlur={(e) =>
//                                 updateQuery("minPrice", e.target.value)
//                             }
//                         />
//                     </div>
//
//                     <div>
//                         <label className="mb-2 block text-sm font-medium">
//                             Max Price
//                         </label>
//
//                         <Input
//                             type="number"
//                             placeholder="1000"
//                             defaultValue={searchParams.get("maxPrice") ?? ""}
//                             onBlur={(e) =>
//                                 updateQuery("maxPrice", e.target.value)
//                             }
//                         />
//                     </div>
//                 </div>
//
//                 {/* Sort By */}
//                 <div>
//                     <label className="mb-2 block text-sm font-medium">
//                         Sort By
//                     </label>
//
//                     <Select
//                         defaultValue={searchParams.get("sortBy") ?? "createdAt"}
//                         onValueChange={(value) => updateQuery("sortBy", value)}
//                     >
//                         <SelectTrigger className="w-full">
//                             <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectItem value="createdAt">Newest</SelectItem>
//                             <SelectItem value="price">Price: Low to High</SelectItem>
//                             <SelectItem value="title">Price: High to Low</SelectItem>
//                             <SelectItem value="title">Highest Rated</SelectItem>
//                         </SelectContent>
//                     </Select>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }

"use client";

import {useEffect, useMemo, useState, useTransition} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface ICategory {
    id: string;
    name: string;
}

export default function ServiceFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [location, setLocation] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    //const [isPending, startTransition] = useTransition();
    useEffect(() => {
        setLocation(searchParams.get("location") ?? "");
        setMinPrice(searchParams.get("minPrice") ?? "");
        setMaxPrice(searchParams.get("maxPrice") ?? "");
    }, [searchParams]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentLocation = searchParams.get("location") ?? "";
            const currentMinPrice = searchParams.get("minPrice") ?? "";
            const currentMaxPrice = searchParams.get("maxPrice") ?? "";
            if (location !== currentLocation) {
                updateQuery("location", location.trim());
            }
            if (minPrice !== currentMinPrice) {
                updateQuery("minPrice", minPrice.trim());
            }
            if (maxPrice !== currentMaxPrice) {
                updateQuery("maxPrice", maxPrice.trim());
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [location, minPrice, maxPrice, searchParams]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
                );
                const data = await res.json();
                if (data.success) {
                    setCategories(data.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const updateQuery = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (!value || value === "all") {
            params.delete(key);
        } else {
            params.set(key, value);
        }

        params.set("page", "1");

        router.replace(`/services?${params.toString()}`);
    };

    const updateSort = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("sortBy");
        params.delete("sortOrder");
        switch (value) {
            case "newest":
                params.set("sortBy", "createdAt");
                params.set("sortOrder", "desc");
                break;

            case "priceAsc":
                params.set("sortBy", "price");
                params.set("sortOrder", "asc");
                break;

            case "priceDesc":
                params.set("sortBy", "price");
                params.set("sortOrder", "desc");
                break;

            case "rating":
                params.set("sortBy", "rating");
                params.set("sortOrder", "desc");
                break;
        }

        params.set("page", "1");

        router.replace(`/services?${params.toString()}`);
    };

    const sortValue = useMemo(() => {
        const sortBy = searchParams.get("sortBy");
        const sortOrder = searchParams.get("sortOrder");
        if (sortBy === "price" && sortOrder === "asc") return "priceAsc";
        if (sortBy === "price" && sortOrder === "desc") return "priceDesc";
        if (sortBy === "rating") return "rating";
        return "newest";
    }, [searchParams]);

    const resetFilters = () => {
        setLocation("");
        setMinPrice("");
        setMaxPrice("");
        router.replace("/services");
    };

    return (

        <Card className="sticky top-24">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Filters</CardTitle>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetFilters}
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-5">

                {/* Category */}
                <Select
                    value={searchParams.get("category") ?? "all"}
                    onValueChange={(value) => updateQuery("category", value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>

                    <SelectContent>
                        <ScrollArea className="h-60">
                            <SelectItem value="all">All</SelectItem>
                            {categories.map((category) => (
                                <SelectItem
                                    key={category.id}
                                    value={category.name}
                                >
                                    {category.name}
                                </SelectItem>
                            ))}
                        </ScrollArea>
                    </SelectContent>
                </Select>

                {/* Location */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Location
                    </label>

                    <Input
                        placeholder="Dhaka"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}

                    />
                </div>

                {/* Rating */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Rating
                    </label>

                    <Select
                        value={searchParams.get("rating") ?? "all"}
                        onValueChange={(value) => updateQuery("rating", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Rating" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">All Ratings</SelectItem>
                            <SelectItem value="5">5★</SelectItem>
                            <SelectItem value="4">4★ & Up</SelectItem>
                            <SelectItem value="3">3★ & Up</SelectItem>
                            <SelectItem value="2">2★ & Up</SelectItem>
                            <SelectItem value="1">1★ & Up</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Price */}
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Min Price
                        </label>
                        <Input
                            type="number"
                            placeholder="500"
                            value={minPrice}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value === "" || Number(value) >= 0) {
                                    setMinPrice(value);
                                }
                            }}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Max Price
                        </label>
                        <Input
                            type="number"
                            placeholder="1000"
                            value={maxPrice}
                            onChange={(e) => {
                                const value = e.target.value;

                                if (value === "" || Number(value) >= 0) {
                                    setMaxPrice(value);
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Sort */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Sort By
                    </label>

                    <Select
                        value={sortValue}
                        onValueChange={updateSort}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="newest">
                                Newest
                            </SelectItem>

                            <SelectItem value="priceAsc">
                                Price: Low to High
                            </SelectItem>

                            <SelectItem value="priceDesc">
                                Price: High to Low
                            </SelectItem>

                            <SelectItem value="rating">
                                Highest Rated
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </CardContent>
        </Card>
    );
}