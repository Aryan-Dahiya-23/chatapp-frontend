import axios from "axios"

const url = import.meta.env.VITE_URL;

export const getConversation = async (userId: string, conversationId: string | undefined) => {
    try {

        const response = await axios.get(`${url}/conversation/${conversationId}`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const createConversation = async (senderId: string, receiverId:string) => {
    try{
        const response = await axios.post(`${url}/conversation/create-conversation`, { senderId, receiverId });
        return response;
    }catch(error){
        console.log(error)
    }
}

export const createMessage = async (conversationId: string | undefined, message: object) => {
    try {
        const response = await axios.post(`${url}/conversation/create-message/${conversationId}`, {
            message
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}