import axios from "axios";
const url = import.meta.env.VITE_URL;

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchPeople = async (userId: string) => {
    try {
        const response = await axios.get(`${url}/people`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};