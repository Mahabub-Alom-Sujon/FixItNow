// import { getAllReviews } from "../_actions/review";
import ReviewTable from "../_components/ReviewTable";
import CreateReviewDialog from "../_components/CreateReviewDialog";

export default async function ReviewsPage() {
    // const result = await getAllReviews();

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        Reviews
                    </h1>

                    <p className="text-muted-foreground">
                        Manage customer reviews and ratings.
                    </p>
                </div>

                <CreateReviewDialog />
            </div>

            {/*<ReviewTable reviews={result.data} />*/}
        </div>
    );
}