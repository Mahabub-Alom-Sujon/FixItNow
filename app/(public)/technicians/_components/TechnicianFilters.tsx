"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface TechnicianFiltersProps {
    location: string;
    setLocation: (value: string) => void;

    minRating: string;
    setMinRating: (value: string) => void;

    maxHourlyRate: string;
    setMaxHourlyRate: (value: string) => void;

    onApply: () => void;
    onClear: () => void;
}

export default function TechnicianFilters({
                                              location,
                                              setLocation,
                                              minRating,
                                              setMinRating,
                                              maxHourlyRate,
                                              setMaxHourlyRate,
                                              onApply,
                                              onClear,
                                          }: TechnicianFiltersProps) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {/* Location */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>

                    <Input
                        placeholder="e.g. Barisal"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                {/* Minimum Rating */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Minimum Rating
                    </label>

                    <Select
                        value={minRating}
                        onValueChange={setMinRating}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Any Rating" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="1">1★ & above</SelectItem>
                            <SelectItem value="2">2★ & above</SelectItem>
                            <SelectItem value="3">3★ & above</SelectItem>
                            <SelectItem value="4">4★ & above</SelectItem>
                            <SelectItem value="5">5★ only</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Max Hourly Rate */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">
                        Max Hourly Rate
                    </label>

                    <Input
                        type="number"
                        placeholder="800"
                        value={maxHourlyRate}
                        onChange={(e) =>
                            setMaxHourlyRate(e.target.value)
                        }
                    />
                </div>

                {/* Buttons */}
                <div className="flex items-end gap-2">
                    <Button
                        className="flex-1"
                        onClick={onApply}
                    >
                        Apply
                    </Button>

                    <Button
                        variant="outline"
                        onClick={onClear}
                    >
                        <X className="mr-2 h-4 w-4" />
                        Clear
                    </Button>
                </div>
            </div>
        </div>
    );
}