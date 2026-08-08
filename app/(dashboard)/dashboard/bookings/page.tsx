import Booking from "../_components/Booking";
import { getBookings } from "../_actions/booking";

export default async function BookingPage() {
    const result = await getBookings();

    return (
        <Booking bookings={result.data} />
    );
}