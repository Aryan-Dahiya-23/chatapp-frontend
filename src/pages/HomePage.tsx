/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery, } from "@tanstack/react-query";
import { AuthContext } from "../contexts/AuthContext";
import DesktopNavigation from "../components/Navigation/DesktopNavigation";
import MobileNavigation from "../components/Navigation/MobileNavigation";
import Users from "../components/Users/Users";
import Chats from "../components/Chats/Chats";
import { queryClient } from "../api/auth";
import { verify } from "../api/auth";

const HomePage = () => {

    const isMobileScreen = () => window.innerWidth <= 647;

    return (

        <div className="md:flex md:flex-row">
            <DesktopNavigation />
            <MobileNavigation />
            <Users />
        </div>

    )
}

export default HomePage;


// import axios from "axios";
// import { io, Socket } from "socket.io-client";
// const socket: Socket = io("http://localhost:4000");

// const url = import.meta.env.VITE_URL;
// useEffect(() => {
//     const getUser = async () => {

//         const response = await axios.get(`${url}/auth/verify`, {
//             withCredentials: true
//         })
//     }

//     getUser();
// }, []);

// const logout = async () => {
//     const res = await axios.post(`${url}/auth/logout`, {}, {
//         withCredentials: true,
//     });

// }

// useEffect(() => {
//     socket.on("connect", () => {
//         console.log("Connected to the Socket.IO server");
//     });

//     return () => {
//         socket.disconnect();
//     };
// }, []);

// useEffect(() => {
//     socket.on('chat message', (message) => {
//         alert(`Received message: ${message}`);
//     });

//     return () => {
//         socket.off('chat message');
//     };
// }, []);

// const sendMessage = () => {
//     socket.emit('chat message', "Hey a message is sent!");
// }
