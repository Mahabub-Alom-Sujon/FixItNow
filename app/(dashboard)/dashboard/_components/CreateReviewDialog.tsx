"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Star } from "lucide-react";
import { toast } from "sonner";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    createReview,
    type CreateReviewPayload,
} from "../_actions/review";

interface CreateReviewDialogProps {
    bookingId?: string;
}

export default function CreateReviewDialog({
    bookingId,
}: CreateReviewDialogProps) {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<CreateReviewPayload>({
        defaultValues: {
            bookingId: bookingId || "",
            rating: 5,
            comment: "",
        },
    });

    const rating = watch("rating");

    const onSubmit = async (
        values: CreateReviewPayload
    ) => {
        try {
            setLoading(true);

            await createReview({
                bookingId: values.bookingId,
                rating: Number(values.rating),
                comment: values.comment?.trim() || "",
            });

            toast.success(
                "Review created successfully."
            );

            reset({
                bookingId: bookingId || "",
                rating: 5,
                comment: "",
            });

            setOpen(false);

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to create review."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    <Star className="mr-2 h-4 w-4" />
                    Add Review
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[300px]">
                <DialogHeader>
                    <DialogTitle>
                        Create Review
                    </DialogTitle>

                    <DialogDescription>
                        Add a rating and feedback for the
                        booking.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    {/* Booking ID */}
                    <div className="space-y-2">
                        <label
                            htmlFor="bookingId"
                            className="text-sm font-medium"
                        >
                            Booking ID
                        </label>

                        <Input
                            id="bookingId"
                            placeholder="Enter booking ID"
                            disabled={!!bookingId}
                            {...register("bookingId", {
                                required:
                                    "Booking ID is required.",
                            })}
                        />

                        {errors.bookingId && (
                            <p className="text-sm text-destructive">
                                {errors.bookingId.message}
                            </p>
                        )}
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
                        <label
                            htmlFor="rating"
                            className="text-sm font-medium"
                        >
                            Rating
                        </label>

                        <Select
                            value={String(rating)}
                            onValueChange={(value) => {
                                setValue(
                                    "rating",
                                    Number(value),
                                    {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                    }
                                );
                            }}
                        >
                            <SelectTrigger id="rating">
                                <SelectValue placeholder="Select rating" />
                            </SelectTrigger>

                            <SelectContent>
                                {[5, 4, 3, 2, 1].map(
                                    (value) => (
                                        <SelectItem
                                            key={value}
                                            value={String(
                                                value
                                            )}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    {value}
                                                </span>

                                                <div className="flex">
                                                    {Array.from({
                                                        length: value,
                                                    }).map(
                                                        (
                                                            _,
                                                            index
                                                        ) => (
                                                            <Star
                                                                key={
                                                                    index
                                                                }
                                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>

                        {errors.rating && (
                            <p className="text-sm text-destructive">
                                {errors.rating.message}
                            </p>
                        )}
                    </div>

                    {/* Comment */}
                    <div className="space-y-2">
                        <label
                            htmlFor="comment"
                            className="text-sm font-medium"
                        >
                            Comment
                        </label>

                        <Textarea
                            id="comment"
                            placeholder="Write your review..."
                            className="min-h-[120px] resize-none"
                            {...register("comment")}
                        />

                        {errors.comment && (
                            <p className="text-sm text-destructive">
                                {errors.comment.message}
                            </p>
                        )}
                    </div>

                    {/* Preview */}
                    <div className="rounded-lg border bg-muted/40 p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                                Selected rating
                            </span>

                            <div className="flex items-center gap-1">
                                {Array.from({
                                    length: Number(rating) || 0,
                                }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}

                                <span className="ml-1 text-sm font-medium">
                                    {rating}/5
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                setOpen(false);
                                reset({
                                    bookingId:
                                        bookingId || "",
                                    rating: 5,
                                    comment: "",
                                });
                            }}
                            disabled={loading}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Creating..."
                                : "Create Review"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}