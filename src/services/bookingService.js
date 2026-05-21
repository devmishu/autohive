
export const bookingService = {

    cretaeBooking: async (bookedData, tokenData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token?.token}` 
            },
            body: JSON.stringify(bookedData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

    getAllBookingsCars: async (token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
                headers: {
                    authorization: `Bearer ${token?.token}`
                }
            });

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