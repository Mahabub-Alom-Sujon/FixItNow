import { getAllPayments } from "../_actions/payment";

import PaymentTable from "../_components/PaymentTable";

export default async function PaymentsPage() {
    const result = await getAllPayments();

    return (
        <div className="space-y-6 p-6">
            <div>
                <h1 className="text-2xl font-bold">
                    Payments
                </h1>

                <p className="text-muted-foreground">
                    Manage and view all payment transactions.
                </p>
            </div>

            <PaymentTable payments={result.data} />
        </div>
    );
}