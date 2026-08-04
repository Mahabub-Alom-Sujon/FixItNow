import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { IReview } from "@/types/types.technicians";
import {Separator} from "@/components/ui/separator";

interface ReviewsSectionProps {
    reviews: IReview[];
}

export default function ReviewsSection({
                                           reviews,
                                       }: ReviewsSectionProps) {
    return (
        <Card className="rounded-2xl">
            <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Customer Reviews</h2>
                <Separator/>
                {reviews.length === 0 ? (
                    <p className=" text-muted-foreground">No reviews yet.</p>
                ) : (
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="mt-4 border-b pb-5 last:border-none"
                            >
                                <div className="mb-2 flex items-center justify-between">
                                    <h4 className="font-semibold">
                                        {review.customer.name}
                                    </h4>

                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span>{review.rating}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    {review.comment}
                                </p>

                                <p className="mt-2 text-xs text-muted-foreground">
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}