"use client";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { createBooking } from "../_actions/booking";
import { Button } from "@/components/ui/button";;
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import AvailabilitySlot from "./AvailabilitySlot";
interface Availability {
    id: string;
    technicianId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
}

interface Props {
    availability: Availability[];
    technicianId: string;
    serviceId: string;
}



export default function AvailabilityDialog({
    availability,
    technicianId,
    serviceId,
}: Props) {
    const router = useRouter();
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [bookingTime, setBookingTime] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);
    const handleBooking = async () => {
        if (!date || !bookingTime || !address) {
            alert("Please fill all required fields.");
            return;
        }

        setLoading(true);

        try {
            const payload = {
                bookingDate: date.toISOString(),
                bookingTime,
                note,
                address,
                technicianId,
                serviceId,
            };
            const result = await createBooking(payload);

            // Reset
            setDate(undefined);
            setBookingTime("");
            setAddress("");
            setNote("");

            router.push("/dashboard/customer/bookings");
            //router.push(`/dashboard/customer/bookings/${result.data.id}`);
            router.refresh();

        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Booking failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">Book Now</Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl overflow-hidden p-0">
                {/* Header */}
                <DialogHeader className="border-b px-6 py-4">
                    <DialogTitle className="text-xl font-semibold">
                        Create Booking
                    </DialogTitle>
                </DialogHeader>

                {/* Scrollable Body */}
                <ScrollArea className="max-h-[70vh]">
                    <div className="space-y-6 px-6 py-5">
                        <h1>Technician Slot </h1>
                        {/* Availability */}
                        {availability.map((slot) => (
                            <AvailabilitySlot
                                key={slot.id}
                                slot={slot}
                            />
                        ))}
                        {/* Booking Date */}
                        <div className="space-y-2">
                            <label className="font-medium">
                                Booking Date
                            </label>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="w-full rounded-lg border"
                            />
                        </div>

                        {/* Booking Time */}
                        <div className="space-y-2">
                            <label className="font-medium">
                                Booking Time
                            </label>

                            <Input
                                placeholder="10:00 AM"
                                value={bookingTime}
                                onChange={(e) => {
                                    console.log("Booking Time:", e.target.value);
                                    setBookingTime(e.target.value);
                                }}
                            />
                        </div>

                        {/* Address */}
                        <div className="space-y-2">
                            <label className="font-medium">
                                Address
                            </label>

                            <Textarea
                                rows={3}
                                placeholder="House 12, Road 5, Dhanmondi, Dhaka"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        {/* Note */}
                        <div className="space-y-2">
                            <label className="font-medium">
                                Note
                            </label>

                            <Textarea
                                rows={4}
                                placeholder="Please bring all required tools..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>

                    </div>
                </ScrollArea>

                {/* Footer */}
                <div className="border-t bg-background px-6 py-4">
                    <Button
                        className="w-full"
                        size="lg"
                        onClick={handleBooking}
                    >
                        {loading ? "Redirecting to Dashboard" : "Confirm Booking"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}