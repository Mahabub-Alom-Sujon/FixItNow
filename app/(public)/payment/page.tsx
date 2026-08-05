import Link from "next/link";
import { CheckCircle2, Home, ReceiptText, XCircle } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default async function PaymentResultPage({
                                                    searchParams,
                                                }: {
    searchParams: Promise<{
        success?: string;
    }>;
}) {
    const { success } = await searchParams;

    const isSuccess = success === "true";

    return (
        <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-10">
            <Card className="w-full max-w-xl rounded-3xl border shadow-xl">
                <CardHeader className="space-y-6 pb-2 text-center">
                    <div
                        className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${
                            isSuccess
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                        }`}
                    >
                        {isSuccess ? (
                            <CheckCircle2 className="h-14 w-14" />
                        ) : (
                            <XCircle className="h-14 w-14" />
                        )}
                    </div>

                    <div className="space-y-2">
                        <CardTitle className="text-3xl font-bold tracking-tight">
                            {isSuccess
                                ? "Payment Successful!"
                                : "Payment Failed"}
                        </CardTitle>

                        <CardDescription className="mx-auto max-w-md text-base leading-7">
                            {isSuccess
                                ? "Your payment has been completed successfully. Your booking has been confirmed and is now available in your booking history."
                                : "Unfortunately, your payment could not be processed. Please try again or choose another payment method."}
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="mt-6 space-y-6">
                    {isSuccess && (
                        <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm text-green-700">
                            🎉 Thank you for choosing our service. We look forward to serving
                            you.
                        </div>
                    )}

                    {!isSuccess && (
                        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
                            If the amount was deducted from your account, it will usually be
                            refunded automatically according to your bank's policy.
                        </div>
                    )}

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild className="flex-1 px-2 py-3">
                            <Link href="/dashboard/customer">
                                <ReceiptText className="mr-2 h-4 w-4" />
                                My Dashboard
                            </Link>
                        </Button>

                        <Button variant="outline" asChild className="flex-1  px-2 py-3">
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}