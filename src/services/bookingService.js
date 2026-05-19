
export const bookingService = {

    cretaeBooking: async (bookedData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookedData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

    getAllBookingsCars: async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`);

            const data = await res.json();


            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data.data ? data.data : data;


        } catch (error) {
            console.error("Fetch Error:", error.message);
            throw error;
        }
    },

}