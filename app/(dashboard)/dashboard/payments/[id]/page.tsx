import PaymentDetails from "../../_components/PaymentDetails";
import { getPaymentById } from "../../_actions/payment";

interface PaymentDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PaymentDetailsPage({
     params,
}: PaymentDetailsPageProps) {
    const { id } = await params;
    const result = await getPaymentById(id);
    return (
        <div className="container mx-auto p-6">
            <PaymentDetails payment={result.data} />
        </div>
    );
}