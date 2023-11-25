/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createContext, useEffect, useState } from "react";
// import { HiPhoto } from "react-icons/hi2";

// const CloudinaryScriptContext = createContext();

// function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         if (!loaded) {
//             const uwScript = document.getElementById("uw");
//             if (!uwScript) {
//                 // If not loaded, create and load the script
//                 const script = document.createElement("script");
//                 script.setAttribute("async", "");
//                 script.setAttribute("id", "uw");
//                 script.src = "https://upload-widget.cloudinary.com/global/all.js";
//                 script.addEventListener("load", () => setLoaded(true));
//                 document.body.appendChild(script);
//             } else {
//                 // If already loaded, update the state
//                 setLoaded(true);
//             }
//         }
//     }, [loaded]);

//     const initializeCloudinaryWidget = () => {
//         if (loaded) {
//             let myWidget = window.cloudinary.createUploadWidget(
//                 uwConfig,
//                 (error, result) => {
//                     if (!error && result && result.event === "success") {
//                         console.log("Done! Here is the image info: ", result.info);
//                         setPublicId(result.info.public_id);
//                     }
//                 }
//             );

//             document.getElementById("upload_widget").addEventListener(
//                 "click",
//                 function () {
//                     myWidget.open();
//                 },
//                 false
//             );
//         }
//     };

//     return (
//         <CloudinaryScriptContext.Provider value={{ loaded }}>
//             <button id="upload_widget" onClick={initializeCloudinaryWidget}>
//                 <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />
//             </button>

//         </CloudinaryScriptContext.Provider>
//     );
// }

// export default CloudinaryUploadWidget;
// export { CloudinaryScriptContext };
import React, { createContext, useContext, useEffect, useState } from "react";
import { HiPhoto } from "react-icons/hi2";
import { AuthContext } from "../../contexts/AuthContext";

interface CloudinaryUploadWidgetProps {
    uwConfig: any; // Replace 'any' with the actual type for uwConfig
}

interface CloudinaryScriptContextProps {
    loaded: boolean;
}

const CloudinaryScriptContext = createContext<CloudinaryScriptContextProps>({ loaded: false });

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({ uwConfig }) => {

    const { setMessageUrl} = useContext(AuthContext);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            const myWidget = (window as any).cloudinary.createUploadWidget(
                uwConfig,
                (error: any, result: any) => {
                    if (!error && result && result.event === "success") {
                        // alert(result.info.url);
                        setMessageUrl(result.info.url);
                    }
                }
            );

            document.getElementById("upload_widget")?.addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button id="upload_widget" onClick={initializeCloudinaryWidget}>
                <HiPhoto className="chat-icons text-sky-500 hover:text-sky-600" />
            </button>
        </CloudinaryScriptContext.Provider>
    );
};

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
