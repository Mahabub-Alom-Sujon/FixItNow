// "use client";
//
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { createPayment } from "../_actions/payment";
//
// interface PayNowButtonProps {
//     bookingId: string;
// }
//
// export default function PayNowButton({
//                                          bookingId,
//                                      }: PayNowButtonProps) {
//     const [loading, setLoading] = useState(false);
//
//     const handlePayment = async () => {
//         if (loading) return;
//
//         try {
//             setLoading(true);
//
//             const result = await createPayment({
//                 bookingId,
//             });
//
//             const checkoutUrl = result?.data?.checkoutUrl;
//
//             if (!checkoutUrl) {
//                 throw new Error(
//                     "Stripe checkout URL was not returned."
//                 );
//             }
//
//             // Redirect customer to Stripe Checkout
//             window.location.href = checkoutUrl;
//         } catch (error) {
//             console.error(error);
//
//             alert(
//                 error instanceof Error
//                     ? error.message
//                     : "Payment failed."
//             );
//
//             setLoading(false);
//         }
//     };
//
//     return (
//         <Button
//             size="sm"
//             onClick={handlePayment}
//             disabled={loading}
//         >
//             {loading ? "Redirecting..." : "Pay Now"}
//         </Button>
//     );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createPayment } from "../_actions/payment";

interface PayNowButtonProps {
    bookingId: string;
}

export default function PayNowButton({
                                         bookingId,
                                     }: PayNowButtonProps) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        if (loading) return;

        try {
            setLoading(true);

            const result = await createPayment({
                bookingId,
            });

            console.log("Payment response:", result);

            const checkoutUrl =
                result?.data?.checkoutUrl;

            const sessionId =
                result?.data?.sessionId;

            if (!checkoutUrl) {
                throw new Error(
                    "Stripe checkout URL not found."
                );
            }

            if (!sessionId) {
                throw new Error(
                    "Stripe session ID not found."
                );
            }

            console.log("Checkout URL:", checkoutUrl);
            console.log("Session ID:", sessionId);

            // Redirect to Stripe Checkout
            window.location.href = checkoutUrl;
        } catch (error) {
            console.error(
                "Payment creation error:",
                error
            );

            alert(
                error instanceof Error
                    ? error.message
                    : "Payment failed. Please try again."
            );

            setLoading(false);
        }
    };

    return (
        <Button
            size="sm"
            onClick={handlePayment}
            disabled={loading}
        >
            {loading
                ? "Redirecting..."
                : "Pay Now"}
        </Button>
    );
}