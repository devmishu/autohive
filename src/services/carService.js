
export const carService = {

    addCar: async (carData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data; 
    },

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