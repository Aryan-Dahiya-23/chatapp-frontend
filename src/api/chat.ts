// import { QueryClient } from "@tanstack/react-query";
import axios from "axios"

const url = import.meta.env.VITE_URL;

export const fetchMessages = async(userId: string, conversationId) => {
    try{

        const response = await axios.get(`${url}/chats/${conversationId}`, {
            params: { userId }
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
}

// export const createMessage = async(conversationId: string | undefined, senderId: string, message: string) => {
//     try{
//         const response = await axios.post(`${url}/createmessage/${conversationId}`, {
//             senderId,
//             message
//         });
//         return response.data;
//     }catch(error){
//         console.log(error);
//     }
// }

export const createMessage = async(conversationId: string | undefined, message: object) => {
    try{
        const response = await axios.post(`${url}/createmessage/${conversationId}`, {
           message
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
}