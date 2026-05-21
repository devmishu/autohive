
export const carService = {

    addCar: async (carData, tokenData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(carData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },



    getAllCars: async (searchTerm = '', carType = '') => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars?search=${searchTerm}&type=${carType}`);

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

    getAvailableCars: async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/available-cars`);

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


    getSingleCar: async (id, token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
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

    getMyCars: async (userId, token) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-cars/${userId}`, {
                headers: {
                    authorization: `Bearer ${token.token}`
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


    deleteMyCar: async (id, tokenData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-cars/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${tokenData.token}`
            },
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

    editMyCar: async (id, updatedData, tokenData) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(updatedData)
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    },

}