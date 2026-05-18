
export const carService = {
    getAllCars: async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`);

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